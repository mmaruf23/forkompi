import { query } from "@/lib/db";
import type { ApiResponse } from "@/types/response";
import bcrypt from "bcryptjs";

type RegisterRequest = {
  username: string;
  firstName: string;
  lastName?: string;
  password: string;
};

export const registerUser = async (r: Request): Promise<ApiResponse<{ insertId: number }>> => {
  try {
    const { username, firstName, lastName, password }: RegisterRequest = await r.json();
    if (!username || !firstName || !password)
      return { status: 400, message: "Input tidak lengkap!" };

    const existingUsers = await query<{ id: number }>("SELECT id FROM users WHERE username = ?", [
      username,
    ]);
    if (existingUsers.length > 0) return { message: "Username telah terdaftar!", status: 409 };

    const passwordHash = await bcrypt.hash(password, 10);
    const result = await query<{ insertId: number }>(
      "INSERT INTO users (username, first_name, last_name, password_hash) VALUES (?, ?, ?, ?)",
      [username, firstName, lastName, passwordHash]
    );
    if (!result.length) return { status: 500, message: "gagal membuat user baru" };

    return { status: 201, data: result[0] };
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Server error" };
  }
};
