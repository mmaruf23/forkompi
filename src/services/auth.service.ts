import { query } from "@/libs/db";
import type { ResultSetHeader, ResultSelectQuery, User } from "@/types/db";
import type { LoginRequest, RegisterRequest } from "@/types/request";
import type { ApiErrorResponse, ApiResponse } from "@/types/response";
import bcrypt from "bcryptjs";
import { sign, verify, type VerifyErrors } from "jsonwebtoken";
import type { NextApiRequest } from "next";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET belum diset di .env");
}

export type JwtPayload = {
  userId: number;
  username: string;
  iat: number; // Issued at
  exp: number; // Expiration time
};

export const registerUser = async (rr: RegisterRequest): Promise<ApiResponse<null>> => {
  try {
    const { username, firstName, lastName = "", password }: RegisterRequest = rr;
    if (!username || !firstName || !password)
      return { success: false, code: 400, message: "Input tidak lengkap!" };

    const existingUsers = await query<ResultSelectQuery<{ id: number }>>(
      "SELECT id FROM users WHERE username = ?",
      [username]
    );

    if (existingUsers.length > 0)
      return { success: false, code: 409, message: "Username telah terdaftar!" };

    const passwordHash = await bcrypt.hash(password, 10);

    const result = await query<ResultSetHeader>(
      "INSERT INTO users (username, first_name, last_name, password_hash) VALUES (?, ?, ?, ?)",
      [username, firstName, lastName, passwordHash]
    );

    if (!result.insertId) return { success: false, code: 500, message: "gagal membuat user baru" };

    return { success: true, code: 201 };
  } catch (error) {
    console.error(error);
    return { success: false, code: 500, message: "Internal Server Error" };
  }
};

export const loginUser = async (lr: LoginRequest): Promise<ApiResponse<{ token: string }>> => {
  try {
    const { username, password } = lr;
    if (!username || !password)
      return { success: false, code: 400, message: "Input tidak lengkap!" };

    const users = await query<ResultSelectQuery<User>>("SELECT * FROM users WHERE username = ?", [
      username,
    ]);
    if (!users.length)
      return { success: false, code: 401, message: "Invalid username or password." };

    const isValidPassword = await bcrypt.compare(password, users[0].password_hash);
    if (!isValidPassword)
      return { success: false, code: 401, message: "Invalid username or password." };

    const token = sign({ userId: users[0].id, username: users[0].username }, JWT_SECRET, {
      expiresIn: "1h", // todo : ganti jadi 24 jam aja nanti
    });

    return { success: true, code: 200, data: { token } };
  } catch (error) {
    console.error(error);
    return { success: false, code: 500, message: "Internal Server Error" };
  }
};

export const doAuth = (req: NextApiRequest): ApiErrorResponse | null => {
  const authorization = req.headers["authorization"];
  if (!authorization) {
    return {
      success: false,
      code: 401,
      message: "Missing Authorization Token.",
    };
  }

  let decoded: JwtPayload;
  try {
    const token = authorization.split(" ")[1];
    decoded = verify(token, JWT_SECRET) as JwtPayload;
    req.userId = decoded.userId;
    return null;
  } catch (error) {
    const verifyErrors = error as VerifyErrors;
    return {
      success: false,
      code: 401,
      message: verifyErrors.message || "Authorization Error",
    };
  }
};
