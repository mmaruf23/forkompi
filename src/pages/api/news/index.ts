import { doAuth } from "@/services/auth.service";
import { parseNewsRequest } from "@/services/file.service";
import {
  createNewsDraft,
  editNewsDraft,
  getAllNews,
  getPublishedNews,
} from "@/services/news.service";
import type { News } from "@/types/db";
import type { NewsRequest } from "@/types/request";
import type { ApiResponse } from "@/types/response";
import type { NextApiHandler, NextApiResponse, PageConfig } from "next";

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
const handler: NextApiHandler = async (
  req,
  res: NextApiResponse<ApiResponse<News[] | NewsRequest[] | string>>
) => {
  const authError = doAuth(req);

  if (req.method == "GET" && !req.userId) {
    const page = req.query.page as string;
    const result = await getPublishedNews(page);
    return res.status(result.code).json(result);
  }

  if (authError) {
    if (authError) return res.status(authError.code).json(authError);
  } // selain method get, authentikasi harus valid

  if (req.method == "GET") {
    const page = req.query.page as string;
    const result = await getAllNews(page);
    return res.status(result.code).json(result);
  }

  if (req.method == "POST") {
    const nr = await parseNewsRequest(req);
    if (!nr)
      return res.status(500).json({ success: false, code: 500, message: "error while parsing" });
    const result = await createNewsDraft(nr, req.userId);
    return res.status(result.code).json(result);
  }

  if (req.method == "PUT") {
    const nr = await parseNewsRequest(req);
    if (!nr)
      return res.status(500).json({ success: false, code: 500, message: "error while parsing" });
    const result = await editNewsDraft(nr);
    return res.status(result.code).json(result);
  }

  return res.status(405).json({ success: false, code: 405, message: "METHOD NOT ALLOWED" });
};

export default handler;
