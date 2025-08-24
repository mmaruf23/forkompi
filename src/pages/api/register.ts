import { registerUser } from "@/services/backend.service";
import type { RegisterRequest } from "@/types/request";
import type { ApiResponse } from "@/types/response";
import type { NextApiHandler, NextApiResponse } from "next";

const handler: NextApiHandler = async (req, res: NextApiResponse<ApiResponse<null>>) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      status: "error",
      code: 405,
      message: "METHOD NOW ALLOWED",
    });
  }

  const payload = req.body as RegisterRequest;
  const result = await registerUser(payload);
  console.log(result);
  res.status(result.code).json(result);
};

export default handler;
