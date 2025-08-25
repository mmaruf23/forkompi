import type { NewsPostRequest } from "@/types/request";
import type { ApiResponse } from "@/types/response";

export const createNewsDraft = async (npr: NewsPostRequest): Promise<ApiResponse<string>> => {
  const { title, subtitle, content, images } = npr;
  if (!title || !subtitle || !content || !images) {
    return {
      status: "error",
      code: 400,
      message: "Invalid Request.",
    };
  }

  return {
    status: "success",
    code: 201,
    data: "draft disimpan",
  };
};
