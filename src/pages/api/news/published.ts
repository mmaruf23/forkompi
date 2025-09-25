import { getPublishedNews } from "@/services/news.service";
import type { ApiResponse, NewsResponse } from "@/types/response";
import type { NextApiHandler, NextApiResponse } from "next";

const handler: NextApiHandler = async (req, res: NextApiResponse<ApiResponse<NewsResponse[]>>) => {
  if (req.method !== "GET")
    return res.status(405).json({ success: false, code: 405, message: "METHOD NOT ALLOWED" });
  try {
    const page = req.query.page as string | undefined;

    const result = await getPublishedNews(page);
    return res.status(result.code).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, code: 500, message: "INTERNAL SERVER ERROR" });
  }
};

export default handler;
