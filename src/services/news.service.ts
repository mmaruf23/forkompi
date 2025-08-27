import type { NewsPostRequest } from "@/types/request";
import type { ApiResponse } from "@/types/response";
import { getUserProfile } from "./user.service";
import { query } from "@/lib/db";
import type { News, ResultSelectQuery, ResultSetHeader } from "@/types/db";
import slugify from "slugify";
import { saveImages } from "./file.service";

export const createNewsDraft = async (
  npr: NewsPostRequest,
  userId: number | undefined
): Promise<ApiResponse<string>> => {
  const { title, subtitle, content, images } = npr;
  if (!title || !subtitle || !content || !images)
    return { status: "error", code: 400, message: "Invalid Request." };
  try {
    const userResult = await getUserProfile(userId);
    if (userResult.status == "error") return userResult;

    const slug = slugify(subtitle); // terserah bikin dari title / subtitle
    const existingNews = await query<ResultSelectQuery<News>>(
      "SELECT * FROM news WHERE title = ? OR slug = ?",
      [title, slug]
    );

    if (existingNews.length)
      return { status: "error", code: 409, message: "Title / Subtitle sudah ada." }; // tanya lagi ntar maunya gimana , sementara title / subtitle(yang sementara jadi calon slug) nggak boleh sama dulu.

    const thumbnailUrl = await saveImages(images);
    if (typeof thumbnailUrl != "string") return thumbnailUrl;

    const news = await query<ResultSetHeader>(
      "INSERT INTO news (title, subtitle, slug, thumbnail_url, content, author_id) VALUES (?, ?, ?, ?, ?, ?)",
      [title, subtitle, slug, thumbnailUrl, content, userId]
    );

    if (!news.insertId) {
      return { status: "error", code: 500, message: "error insert ke database" };
    }
  } catch (error) {
    console.error(error);
    return { status: "error", code: 500, message: "server error while create draft news" };
  }

  return { status: "success", code: 201, data: "draft disimpan" };
};
