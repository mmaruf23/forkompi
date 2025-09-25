import { loginUser } from "@/services/auth.service";
import type { LoginRequest } from "@/types/request";
import type { ApiResponse } from "@/types/response";
import type { NextApiHandler, NextApiResponse } from "next";

const handler: NextApiHandler = async (
  req,
  res: NextApiResponse<ApiResponse<{ token: string }>>
) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: "error",
      code: 405,
      message: "METHOD NOW ALLOWED",
    });
  }

  const payload = req.body as LoginRequest;
  const result = await loginUser(payload);
  res.status(result.code).json(result);
};

export default handler;
