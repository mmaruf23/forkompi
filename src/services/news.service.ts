import type { NewsRequest } from "@/types/request";
import type { ApiResponse, NewsResponse } from "@/types/response";
import { getUserProfile } from "./user.service";
import { query } from "@/lib/db";
import type { JoinNews, News, ResultSelectQuery, ResultSetHeader } from "@/types/db";
import slugify from "slugify";
import { saveImages } from "./file.service";

export const createNewsDraft = async (
  nr: NewsRequest,
  userId: number | undefined
): Promise<ApiResponse<string>> => {
  const { title, subtitle, content, images } = nr;
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

  return { status: "success", code: 201, data: "berhasil membuat draft" };
};

export const editNewsDraft = async (
  nr: NewsRequest,
  newsId: number
): Promise<ApiResponse<string>> => {
  const { title, subtitle, content, images } = nr;
  if (!title || !subtitle || !content || !images)
    return { status: "error", code: 400, message: "Tidak ada data yang diubah." };

  try {
    const resultNews = await query<ResultSelectQuery<News>>("SELECT * FROM news WHERE id = ?", [
      newsId,
    ]);

    if (!resultNews.length || resultNews[0].status !== "draft")
      return { status: "error", code: 404, message: "draft tidak ada atau sudah publish" };

    const news = resultNews[0];
    if (title) news.title = title;
    if (subtitle) {
      news.subtitle = subtitle;
      news.slug = slugify(subtitle);
    }
    if (content) news.title = content;
    if (images) {
      const thumbnailUrl = await saveImages(images);
      if (typeof thumbnailUrl == "string") news.thumbnail_url = thumbnailUrl;
      // nanti hapus file image yang dulu (draft) disini.
    }

    const result = await query<ResultSetHeader>(
      "UPDATE news SET title = ?, subtitle = ?, content = ?, thumbnail_url = ? WHERE id = ?",
      [news.title, news.subtitle, news.content, news.thumbnail_url, newsId]
    );

    if (!result.affectedRows)
      return { status: "error", code: 500, message: "fail update news draft" };
  } catch (error) {
    console.error(error);
    return { status: "error", code: 500, message: "error while update news draft" };
  }

  return { status: "success", code: 200, data: "update draft berhasil" };
};

export const updateStatus = async (
  newsId: number,
  status: "draft" | "pending" | "published" | "archieved" | "deleted"
): Promise<ApiResponse<string>> => {
  try {
    const news = await query<ResultSelectQuery<News>>("SELECT * FROM news WHERE id = ?", [newsId]);
    if (!news.length)
      return { status: "error", code: 404, message: "draft tidak ada di database." };
    const result = await query<ResultSetHeader>("UPDATE news SET status = ? WHERE id = ?", [
      status,
      newsId,
    ]);

    if (!result.affectedRows) return { status: "error", code: 500, message: "gagal update status" };
  } catch (error) {
    console.error(error);
    return { status: "error", code: 500, message: "error while update news status" };
  }

  return { status: "success", code: 200, data: "update status draft berhasil" };
};

export const getPublishedNews = async (): Promise<ApiResponse<NewsResponse[]>> => {
  try {
    const news = await query<ResultSelectQuery<JoinNews>>(
      "SELECT n.title, n.subtitle, n.slug, n.thumbnail_url, n.content, u.first_name, u.last_name, n.published_at FROM news n LEFT JOIN users u ON n.author_id = u.id WHERE status = ?",
      ["published"]
    );

    const newsResponse: NewsResponse[] = news.map((n) => {
      const { first_name, last_name, ...rest } = n;
      return { ...rest, author: { first_name, last_name } };
    });

    return { status: "success", code: 200, data: newsResponse };
  } catch (error) {
    console.error(error);
    return { status: "error", code: 500, message: "error while getting news" };
  }
};

export const getAllNews = async (): Promise<ApiResponse<News[]>> => {
  try {
    const news = await query<ResultSelectQuery<News>>("SELECT * FROM news");

    return { status: "success", code: 200, data: news };
  } catch (error) {
    console.error(error);
    return { status: "error", code: 500, message: "error while getting news" };
  }
};
