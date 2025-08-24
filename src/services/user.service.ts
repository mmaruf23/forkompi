import { query } from "@/lib/db";
import type { SelectQuery } from "@/types/db";
import type { UpdateUserRequest } from "@/types/request";
import type { ApiResponse, UserResponse } from "@/types/response";

export const getUserProfile = async (
  userId: string | undefined
): Promise<ApiResponse<UserResponse>> => {
  try {
    if (!userId) return { status: "error", code: 400, message: "Input tidak valid." };

    const users = await query<
      SelectQuery<{ username: string; first_name: string; last_name: string }>
    >("SELECT username, first_name, last_name FROM users where id = ?", [userId]);

    if (!users.length) return { status: "error", code: 404, message: "User tidak ditemukan." };

    return {
      status: "success",
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
      status: "error",
      code: 500,
      message: "Terjadi kesalahan.",
    };
  }
};

export const updateUserProfile = async (
  userId: string | undefined,
  ur: UpdateUserRequest
): Promise<ApiResponse<UserResponse>> => {
  try {
    if (!userId) return { status: "error", code: 404, message: "User belum login." };
    const { username, firstName, password, lastName } = ur;
    if (!username && !firstName && !password && !lastName)
      return { status: "error", code: 400, message: "Data tidak valid!" };

    const users = await query<
      SelectQuery<{ username: string; first_name: string; last_name: string }>
    >("SELECT username, first_name, last_name FROM users where id = ?", [userId]);

    if (!users.length) return { status: "error", code: 404, message: "User tidak ditemukan." };
    // nanti lanjut cek

    return {
      status: "success",
      code: 200,
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      code: 500,
      message: "Terjadi kesalahan.",
    };
  }
};
