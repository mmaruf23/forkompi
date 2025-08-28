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
  const { title, subtitle, content, image } = nr;
  if (!title || !subtitle || !content || !image)
    return { status: "error", code: 400, message: "Invalid Request." };

  try {
    const userResult = await getUserProfile(userId);
    if (userResult.status == "error") return userResult;

    const slug = slugify(title).toLowerCase(); // bikin slug nya dari title aja kan?
    const existingNews = await query<ResultSelectQuery<News>>(
      "SELECT * FROM news WHERE title = ? OR slug = ?",
      [title, slug]
    );

    if (existingNews.length) return { status: "error", code: 409, message: "Judul sudah ada." };

    const thumbnailUrl = await saveImages(image);
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

export const editNewsDraft = async (nr: NewsRequest): Promise<ApiResponse<string>> => {
  const { title, subtitle, content, image: images, id } = nr;
  if (!id || (!title && !subtitle && !content && !images))
    return { status: "error", code: 400, message: "Tidak ada data yang diubah." };

  try {
    const resultNews = await query<ResultSelectQuery<News>>("SELECT * FROM news WHERE id = ?", [
      id,
    ]);

    if (!resultNews.length || resultNews[0].status !== "draft")
      return { status: "error", code: 404, message: "draft tidak ada atau sudah publish" };

    const news = resultNews[0];
    if (title) {
      news.title = title;
      news.slug = slugify(title).toLowerCase();
    }
    if (subtitle) news.subtitle = subtitle;
    if (content) news.content = content;
    if (images) {
      const resultSaveImages = await saveImages(images);
      if (typeof resultSaveImages != "string") return resultSaveImages;
      news.thumbnail_url = resultSaveImages;
      // todo : nanti hapus file image yang dulu (draft) disini.
    }

    const result = await query<ResultSetHeader>(
      "UPDATE news SET title = ?, subtitle = ?, slug = ?, content = ?, thumbnail_url = ? WHERE id = ?",
      [news.title, news.subtitle, news.slug, news.content, news.thumbnail_url, news.id]
    );

    if (!result.affectedRows)
      return { status: "error", code: 500, message: "fail update news draft" };
  } catch (error) {
    console.error(error);
    return { status: "error", code: 500, message: "error while update news draft" };
  }

  return { status: "success", code: 200, data: "update draft berhasil" };
};

export const publishNewsDraft = async (newsId: string): Promise<ApiResponse<string>> => {
  try {
    const news = await query<ResultSelectQuery<News>>("SELECT * FROM news WHERE id = ?", [newsId]);
    if (!news.length || news[0].published_at != null)
      return { status: "error", code: 404, message: "draft tidak ada atau sudah publish." };
    const result = await query<ResultSetHeader>(
      "UPDATE news SET status = 'published', published_at = NOW() WHERE id = ?",
      [newsId]
    );

    if (!result.affectedRows) return { status: "error", code: 500, message: "gagal update status" };
  } catch (error) {
    console.error(error);
    return { status: "error", code: 500, message: "error while update news status" };
  }

  return { status: "success", code: 200, data: "update status draft berhasil" };
};

export const deleteNews = async (newsId: string): Promise<ApiResponse<string>> => {
  try {
    const news = await query<ResultSelectQuery<News>>("SELECT * FROM news WHERE id = ?", [newsId]);
    if (!news.length || news[0].status == "deleted")
      return { status: "error", code: 404, message: "data tidak ada atau sudah terhapus." };

    const result = await query<ResultSetHeader>("UPDATE news SET status = 'deleted' WHERE id = ?", [
      newsId,
    ]);

    if (!result.affectedRows) return { status: "error", code: 500, message: "gagal update status" };
  } catch (error) {
    console.error(error);
    return { status: "error", code: 500, message: "error while update news status" };
  }

  return { status: "success", code: 200, data: "data berhasil dihapus." };
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

export const getNewsById = async (newsId: string): Promise<ApiResponse<News>> => {
  try {
    const news = await query<ResultSelectQuery<News>>("SELECT * FROM news WHERE id = ?", [newsId]);
    if (!news.length)
      return {
        status: "error",
        code: 404,
        message: "tidak ditemukan data news dengan id : " + newsId,
      };

    return { status: "success", code: 200, data: news[0] };
  } catch (error) {
    console.error(error);
    return { status: "error", code: 500, message: "error while getting news" };
  }
};
