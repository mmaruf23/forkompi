import { withAuth } from "@/services/auth.service";
import type { ApiResponse } from "@/types/response";
import type { NextApiHandler, NextApiResponse } from "next";

//contoh
const handler: NextApiHandler = async (req, res: NextApiResponse<ApiResponse<null>>) => {
  return res.status(200).json({ status: "success", code: 200 });
};

export default withAuth(handler);
