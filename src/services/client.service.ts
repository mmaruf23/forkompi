import type { News } from "@/types/db";
import type { ApiErrorResponse, ApiResponse, NewsResponse } from "@/types/response";
import axios, { isAxiosError, type AxiosResponse } from "axios";

type LoginPayload = {
  username: string;
  password: string;
};
export const doLogin = async (payload: LoginPayload): Promise<ApiResponse<{ token: string }>> => {
  try {
    const result: AxiosResponse<ApiResponse<{ token: string }>> = await axios.post(
      "http://localhost:3000/api/login",
      payload
    );
    return result.data;
  } catch (err) {
    if (isAxiosError(err) && err.response) {
      console.log(err.message);
      return err.response.data as ApiErrorResponse;
    }

    const errorData: ApiErrorResponse = {
      code: 500,
      message: "Unhandled error",
      success: false,
    };
    return errorData;
  }
};

// TEST LOGIN OK
// (async () => {
//   const payload: LoginPayload = {
//     username: "mmaruf",
//     password: "rahasia",
//   };
//   const result = await doLogin(payload);
//   console.log(result);
// })();

export const fetchAllNewsAdmin = async (
  page: number = 1,
  token: string
): Promise<ApiResponse<News[]>> => {
  try {
    const result: AxiosResponse<ApiResponse<News[]>> = await axios.get(
      "http://localhost:3000/api/news",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page,
        },
      }
    );
    return result.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(error.message);
      return error.response.data as ApiErrorResponse;
    }
    const errorData: ApiErrorResponse = {
      code: 500,
      message: "Unhandled error",
      success: false,
    };
    return errorData;
  }
};

// TEST FETCH ADMIN OK
// (async () => {
//   const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoibW1hcnVmIiwiaWF0IjoxNzU5MzYxNTY1LCJleHAiOjE3NTkzNjUxNjV9.oTJrHQL0Dh7X3FW2U1dxhWbyUOnC0tHk4aL7UyBx-fA";

//   const result = await fetchAllNewsAdmin(0, token);
//   console.log(result);
// })();

export const fetchAllNews = async (page: number = 1): Promise<ApiResponse<NewsResponse[]>> => {
  try {
    const result: AxiosResponse<ApiResponse<NewsResponse[]>> = await axios.get(
      "http://localhost:3000/api/news",
      {
        params: {
          page,
        },
      }
    );
    return result.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(error.message);
      return error.response.data as ApiErrorResponse;
    }
    const errorData: ApiErrorResponse = {
      code: 500,
      message: "Unhandled error",
      success: false,
    };
    return errorData;
  }
};

// TEST FETCH OK
// (async () => {
//   const result = await fetchAllNews(1);
//   console.log(result);
// })();

const fetchNews = async (id: number): Promise<ApiResponse<News>> => {
  try {
    const result: AxiosResponse<ApiResponse<News>> = await axios.get(
      `http://localhost:3000/api/news/${id}`,
      {}
    );
    return result.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(error);
      return error.response.data as ApiErrorResponse;
    }

    return {
      success: false,
      code: 500,
      message: "Unhandled error",
    };
  }
};

// TEST FETCH ID OK
(async () => {
  const result = await fetchNews(2);
  console.log(result);
})();
