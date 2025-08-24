import type { JwtPayload } from "@/services/auth.service";
import { getUserProfile, updateUserProfile } from "@/services/user.service";
import type { UpdateUserRequest } from "@/types/request";
import type { ApiResponse, UserResponse } from "@/types/response";
import { verify } from "jsonwebtoken";
import type { NextApiHandler, NextApiResponse } from "next";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

const handler: NextApiHandler = async (
  req,
  res: NextApiResponse<ApiResponse<UserResponse | null>>
) => {
  const authorization = req.headers["authorization"];
  if (!authorization) {
    return res.status(401).json({
      status: "error",
      code: 401,
      message: "Missing Authorization Token.",
    });
  }
  const token = authorization.split(" ")[1];
  const decoded = verify(token, JWT_SECRET) as JwtPayload;

  if (req.method === "GET") {
    const result = await getUserProfile(decoded.userId);
    return res.status(result.code).json(result);
  }

  if (req.method === "POST") {
    const updateRequest = req.body as UpdateUserRequest;
    const result = await updateUserProfile(decoded.userId, updateRequest);
    return res.status(result.code).json(result);
  }

  return res.status(400).json({
    status: "error",
    code: 400,
    message: "Invalid Request",
  });
};

export default handler;
