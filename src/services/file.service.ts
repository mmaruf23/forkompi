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
    // Buat nama file unik untuk menghindari konflik
    const fileName = `${Date.now()}-${path.extname(imageFile.originalFilename!)}`;
    const newPath = path.join(imagesDir, fileName);

    // Pindahkan file dari lokasi sementara ke lokasi permanen
    fs.renameSync(imageFile.filepath, newPath);

    // URL yang akan disimpan di database dan diakses dari frontend
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

// export const deleteImage = async (urlFile: string) => {
//   const pathFile = urlFile.replace("/file/images/", "/");
//   fs.unlink(pathFile, (err) => {
//     console.error(err);
//   });
// };

export const parseNewsRequest = async (req: NextApiRequest): Promise<NewsRequest | undefined> => {
  return new Promise((resolve) => {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
      console.error(err);
      if (err) return resolve(undefined);
      resolve({
        title: fields.title?.[0],
        content: fields.content?.[0],
        subtitle: fields.subtitle?.[0],
        images: files.image?.[0],
      });
    });
  });
};
