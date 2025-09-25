import { getNewsById, deleteNews, publishNewsDraft } from "@/services/news.service";
import type { News } from "@/types/db";
import type { ApiResponse } from "@/types/response";
import type { NextApiHandler, NextApiResponse } from "next";

const handler: NextApiHandler = async (req, res: NextApiResponse<ApiResponse<News | string>>) => {
  if (req.method == "GET") {
    const id = req.query.id as string;
    const result = await getNewsById(id);
    return res.status(result.code).json(result);
  }

  if (req.method == "PATCH") {
    const id = req.query.id as string;

    if (!id)
      return res.status(400).json({ success: false, code: 400, message: "request tidak valid." });
    const result = await publishNewsDraft(id);
    return res.status(result.code).json(result);
  }

  if (req.method == "DELETE") {
    const id = req.query.id as string;
    if (!id)
      return res.status(400).json({ success: false, code: 400, message: "request tidak valid." });
    const result = await deleteNews(id);
    return res.status(result.code).json(result);
  }

  return res.status(405).json({ success: false, code: 405, message: "METHOD NOT ALLOWED" });
};

export default handler;
