import { getNewsBySlug } from "@/services/news.service";
import type { ApiResponse, NewsResponse } from "@/types/response";
import type { NextApiHandler, NextApiResponse } from "next";

const handler: NextApiHandler = async (req, res: NextApiResponse<ApiResponse<NewsResponse>>) => {
  const slug = req.query.slug as string | undefined;
  if (!slug)
    return res.status(400).json({
      success: false,
      code: 404,
      message: "parameter required!",
    });

  const news = await getNewsBySlug(slug);
  return res.status(news.code).json(news);
};

export default handler;
