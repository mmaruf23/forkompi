import { withAuth } from "@/services/auth.service";
import { parseNewsRequest } from "@/services/file.service";
import { createNewsDraft, editNewsDraft, getAllNews } from "@/services/news.service";
import type { News } from "@/types/db";
import type { ApiResponse } from "@/types/response";
import type { NextApiHandler, NextApiResponse, PageConfig } from "next";

// todo : bikin yang get by id
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
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
    if (!nr)
      return res.status(500).json({ status: "error", code: 500, message: "error while parsing" });
    console.log("nr : ", nr);
    const result = await editNewsDraft(nr);
    return res.status(result.code).json(result);
  }

  if (req.method == "GET") {
    const page = req.query.page as string;

    const result = await getAllNews(page);
    return res.status(result.code).json(result);
  }

  return res.status(405).json({ status: "error", code: 405, message: "METHOD NOT ALLOWED" });
};

export default withAuth(handler);
