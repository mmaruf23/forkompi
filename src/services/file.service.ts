import type { ApiErrorResponse } from "@/types/response";
import { formidable, type File } from "formidable";
import type { NextApiRequest } from "next";
import path from "path";
import fs from "fs";
import type { NewsRequest } from "@/types/request";

const imagesDir = path.join(process.cwd(), "public", "file", "images");
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const form = formidable({ multiples: true });

/**
 * Menyimpan gambar ke direktory public.
 * @param imageFile Files<string> dari formidable.
 * @returns url untuk disimpan ke database
 */
export const saveImages = async (
  imageFile: File | undefined
): Promise<ApiErrorResponse | string> => {
  if (!imageFile) return { status: "error", code: 400, message: "Tidak ada gambar yang diupload." };

  const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  if (!allowedMimeTypes.includes(imageFile.mimetype!)) {
    // Hapus file yang tidak valid dari direktori sementara formidable
    fs.unlink(imageFile.filepath, (unlinkErr) => {
      if (unlinkErr) console.error("Error deleting invalid file:", unlinkErr);
    });

    return { status: "error", code: 400, message: "Hanya file gambar yang boleh diupload." };
  }
  try {
    const fileName = `${Date.now()}${path.extname(imageFile.originalFilename!)}`;
    const newPath = path.join(imagesDir, fileName);

    await moveFile(imageFile.filepath, newPath);

    const imageUrl = `/file/images/${fileName}`;
    return imageUrl;
  } catch (error) {
    console.error("File upload error:", error);
    return {
      status: "error",
      code: 500,
      message: "Error menyimpan file ke server.",
    };
  }
};

export const parseNewsRequest = async (req: NextApiRequest): Promise<NewsRequest | undefined> => {
  try {
    const [fields, files] = await form.parse(req);
    return {
      id: fields.id?.[0],
      title: fields.title?.[0],
      subtitle: fields.subtitle?.[0],
      content: fields.content?.[0],
      image: files.image?.[0],
    };
  } catch (error) {
    console.error("error while parsing request : ", error);
    return undefined;
  }
};

function moveFile(sourcePath: string, destinationPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.rename(sourcePath, destinationPath, (err) => {
      if (err) {
        if (err.code === "EXDEV") {
          // Jika gagal karena beda device, lakukan copy dan delete
          const readStream = fs.createReadStream(sourcePath);
          const writeStream = fs.createWriteStream(destinationPath);

          readStream.pipe(writeStream);

          writeStream.on("finish", () => {
            fs.unlink(sourcePath, (unlinkErr) => {
              if (unlinkErr) {
                return reject(unlinkErr);
              }
              resolve();
            });
          });

          writeStream.on("error", (writeErr) => {
            reject(writeErr);
          });
        } else {
          reject(err);
        }
      } else {
        resolve();
      }
    });
  });
}
