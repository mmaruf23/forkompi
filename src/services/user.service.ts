import { query } from "@/lib/db";
import type { ResultSetHeader, ResultSelectQuery, User } from "@/types/db";
import type { UpdateUserRequest } from "@/types/request";
import type { ApiResponse, UserResponse } from "@/types/response";
import bcrypt from "bcryptjs";

export const getUserProfile = async (
  userId: number | undefined
): Promise<ApiResponse<UserResponse>> => {
  try {
    if (!userId) return { success: "error", code: 400, message: "User tidak valid." };

    const users = await query<ResultSelectQuery<User>>("SELECT * FROM users where id = ?", [
      userId,
    ]);

    if (!users.length) return { success: "error", code: 404, message: "User tidak ditemukan." };

    return {
      success: "success",
      code: 200,
      data: {
        username: users[0].username,
        firstName: users[0].first_name,
        lastName: users[0].last_name,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      success: "error",
      code: 500,
      message: "Terjadi kesalahan.",
    };
  }
};

export const updateUserProfile = async (
  userId: number | undefined,
  ur: UpdateUserRequest
): Promise<ApiResponse<null>> => {
  try {
    if (!userId) return { success: "error", code: 404, message: "User belum login." };
    const { username, firstName, password, lastName } = ur;
    if (!username && !firstName && !password && !lastName)
      return { success: "error", code: 400, message: "Data tidak valid!" };

    const users = await query<ResultSelectQuery<User>>("SELECT * FROM users where id = ?", [
      userId,
    ]);

    if (!users.length) return { success: "error", code: 404, message: "User tidak ditemukan." };

    const user = users[0];
    if (username && user.username !== username) {
      const isDuplicate = await query<ResultSelectQuery<{ username: string }>>(
        "SELECT username FROM users where username = ?",
        [username]
      );
      if (isDuplicate.length) {
        return { success: "error", code: 409, message: "Usernama sudah digunakan!" };
      }

      user.username = username;
    }

    if (password) user.password_hash = await bcrypt.hash(password, 10);
    if (firstName) user.first_name = firstName;
    if (lastName) user.last_name = lastName;

    const result = await query<ResultSetHeader>(
      "UPDATE users SET username = ?, first_name = ?, last_name = ?, password_hash = ? WHERE id = ?",
      [user.username, user.first_name, user.last_name, user.password_hash, userId]
    );
    if (!result.affectedRows)
      return { success: "error", code: 500, message: "Error saat update data." };

    return {
      success: "success",
      code: 200,
    };
  } catch (error) {
    console.error(error);
    return {
      success: "error",
      code: 500,
      message: "Internal Server Error",
    };
  }
};
