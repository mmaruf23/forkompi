import { withAuth } from "@/services/auth.service";
import type { ApiResponse } from "@/types/response";
import type { NextApiHandler, NextApiResponse } from "next";

//contoh
const handler: NextApiHandler = async (req, res: NextApiResponse<ApiResponse<null>>) => {
  if (req.method == "POST") {
    // Handle bikin draft news
    return res.status(201).json({ status: "success", code: 200 });
  }

  if (req.method == "PUT") {
    // handle edit draft news
    return res.status(200).json({ status: "success", code: 200 });
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
