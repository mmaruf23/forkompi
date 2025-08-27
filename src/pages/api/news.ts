import { withAuth } from "@/services/auth.service";
import { parseNewsRequest } from "@/services/file.service";
import { createNewsDraft, editNewsDraft } from "@/services/news.service";
import type { ApiResponse } from "@/types/response";
import type { NextApiHandler, NextApiResponse } from "next";

// libur dulu hari ini
const handler: NextApiHandler = async (req, res: NextApiResponse<ApiResponse<string>>) => {
  if (req.method == "POST") {
    const nr = await parseNewsRequest(req);
    if (!nr)
      return res.status(500).json({ status: "error", code: 500, message: "error while parsing" });
    const result = await createNewsDraft(nr, req.userId);
    return res.status(result.code).json(result);
  }

  if (req.method == "PUT") {
    const nr = await parseNewsRequest(req);
    const newsId = req.body.id as number;
    if (!nr)
      return res.status(500).json({ status: "error", code: 500, message: "error while parsing" });
    const result = await editNewsDraft(nr, newsId);
    return res.status(result.code).json(result);
  }

  if (req.method == "PATCH") {
    // handle ubah status news
    return res.status(200).json({ status: "success", code: 200 });
  }
  if (req.method == "GET") {
    // handle get news
    // note. jika admin kasih semua termasuk yang draft
    return res.status(200).json({ status: "success", code: 200 });
  }
  return res.status(405).json({ status: "error", code: 405, message: "METHOD NOT ALLOWED" });
};

export default withAuth(handler, ["GET"]);
