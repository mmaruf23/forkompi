import { withAuth } from "@/services/auth.service";
import { parseNewsRequest } from "@/services/file.service";
import { createNewsDraft, editNewsDraft, getAllNews, updateStatus } from "@/services/news.service";
import type { News } from "@/types/db";
import type { ApiResponse } from "@/types/response";
import type { NextApiHandler, NextApiResponse } from "next";

// libur dulu hari ini
const handler: NextApiHandler = async (req, res: NextApiResponse<ApiResponse<News[] | string>>) => {
  if (req.method == "POST") {
    const nr = await parseNewsRequest(req);
    if (!nr)
      return res.status(500).json({ status: "error", code: 500, message: "error while parsing" });
    const result = await createNewsDraft(nr, req.userId);
    return res.status(result.code).json(result);
  }

  if (req.method == "PUT") {
    const nr = await parseNewsRequest(req);
    const newsId = req.body.id as number | undefined;
    if (!nr || !newsId)
      return res.status(500).json({ status: "error", code: 500, message: "error while parsing" });
    const result = await editNewsDraft(nr, newsId);
    return res.status(result.code).json(result);
  }

  if (req.method == "PATCH") {
    const newsId = req.body.id as number | undefined;
    const status = req.body.status as "draft" | "pending" | "published" | "archieved" | undefined;
    if (!status || !newsId)
      return res.status(400).json({ status: "error", code: 400, message: "Bad Request" });
    const result = await updateStatus(newsId, status);
    return res.status(result.code).json(result);
  }

  if (req.method == "DELETE") {
    const newsId = req.body.id as number | undefined;
    const status = req.body.status as "deleted" | undefined;
    if (status !== "deleted" || !newsId)
      return res.status(400).json({ status: "error", code: 400, message: "Bad Request" });
    const result = await updateStatus(newsId, status);
    return res.status(result.code).json(result);
  }

  if (req.method == "GET") {
    const result = await getAllNews();
    return res.status(result.code).json(result);
  }

  return res.status(405).json({ status: "error", code: 405, message: "METHOD NOT ALLOWED" });
};

export default withAuth(handler);
