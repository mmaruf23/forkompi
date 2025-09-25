import { withAuth } from "@/services/auth.service";
import { getUserProfile, updateUserProfile } from "@/services/user.service";
import type { UpdateUserRequest } from "@/types/request";
import type { ApiResponse, UserResponse } from "@/types/response";
import type { NextApiHandler, NextApiResponse } from "next";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

const handler: NextApiHandler = async (
  req,
  res: NextApiResponse<ApiResponse<UserResponse | null>>
) => {
  if (req.method === "GET") {
    const result = await getUserProfile(req.userId);
    return res.status(result.code).json(result);
  }

  if (req.method === "POST") {
    const updateRequest = req.body as UpdateUserRequest;
    const result = await updateUserProfile(req.userId, updateRequest);
    return res.status(result.code).json(result);
  }

  return res.status(405).json({
    success: "error",
    code: 405,
    message: "METHOD NOT ALLOWED",
  });
};

export default withAuth(handler);
