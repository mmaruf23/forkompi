import { query } from "@/lib/db";
import type { InsertQuery, SelectQuery } from "@/types/db";
import type { LoginRequest, RegisterRequest } from "@/types/request";
import type { ApiResponse } from "@/types/response";
import bcrypt from "bcryptjs";

export const registerUser = async (rr: RegisterRequest): Promise<ApiResponse<null>> => {
  try {
    const { username, firstName, lastName = "", password }: RegisterRequest = rr;
    if (!username || !firstName || !password)
      return { status: "error", code: 400, message: "Input tidak lengkap!" };

    const existingUsers = await query<SelectQuery<{ id: number }>>(
      "SELECT id FROM users WHERE username = ?",
      [username]
    );

    if (existingUsers.length > 0)
      return { status: "error", code: 409, message: "Username telah terdaftar!" };

    const passwordHash = await bcrypt.hash(password, 10);

    const result = await query<InsertQuery>(
      "INSERT INTO users (username, first_name, last_name, password_hash) VALUES (?, ?, ?, ?)",
      [username, firstName, lastName, passwordHash]
    );

    if (!result.insertId) return { status: "error", code: 500, message: "gagal membuat user baru" };

    return { status: "success", code: 201 };
  } catch (error) {
    console.error(error);
    return { status: "error", code: 500, message: "Internal Server Error" };
  }
};

export const loginUser = async (lr: LoginRequest): Promise<ApiResponse<string>> => {
  try {
    const { username, password } = lr;
    if (!username || !password)
      return { status: "error", code: 400, message: "Input tidak lengkap!" };

    const users = await query<SelectQuery<{ id: number; password_hash: string; username: string }>>(
      "SELECT id, username, password_hash FROM users WHERE username = ?",
      [username]
    );
    if (!users.length)
      return { status: "error", code: 401, message: "Invalid username or password." };

    const isValidPassword = await bcrypt.compare(password, users[0].password_hash);
    if (!isValidPassword)
      return { status: "error", code: 401, message: "Invalid username or password." };

    // nanti generate jwt disini
    return { status: "success", code: 200, data: "ini.jwt.token" };
  } catch (error) {
    console.error(error);
    return { status: "error", code: 500, message: "Internal Server Error" };
  }
};
