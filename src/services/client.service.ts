import type { ApiErrorResponse, ApiResponse } from "@/types/response";
import axios, { isAxiosError, type AxiosResponse } from "axios";

type LoginPayload = {
  username: string;
  password: string;
};
export const doLogin = async (): Promise<ApiResponse<{ token: string }>> => {
  const payload: LoginPayload = {
    username: "mmaruf",
    password: "salah",
  };

  try {
    const result: AxiosResponse<ApiResponse<{ token: string }>> = await axios.post(
      "/api/login",
      payload
    );
    const data = result.data;
    if (data.success) return result.data;
  } catch (err) {
    if (isAxiosError(err) && err.response) {
      console.log(err.message);
      return err.response.data as ApiErrorResponse;
    }
  }

  const errorData: ApiErrorResponse = {
    code: 500,
    message: "Unhandled error",
    success: false,
  };
  return errorData;
};

// (async () => {
//   const result = await doLogin();
//   console.log(result);
// })();
