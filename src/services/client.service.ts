import type { News } from "@/types/db";
import type { ApiErrorResponse, ApiResponse, NewsResponse } from "@/types/response";
import axios, { isAxiosError, type AxiosResponse } from "axios";

type LoginPayload = {
  username: string;
  password: string;
};

const unhandledError: ApiErrorResponse = {
  success: false,
  code: 500,
  message: "Unhandled error",
};

export const doLogin = async (payload: LoginPayload): Promise<ApiResponse<{ token: string }>> => {
  try {
    const result: AxiosResponse<ApiResponse<{ token: string }>> = await axios.post(
      "/api/login",
      payload
    );
    return result.data;
  } catch (err) {
    if (isAxiosError(err) && err.response) return err.response.data as ApiErrorResponse;
    return unhandledError;
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
    const result: AxiosResponse<ApiResponse<News[]>> = await axios.get("/api/news", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page,
      },
    });
    return result.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) return error.response.data as ApiErrorResponse;
    return unhandledError;
  }
};

// TEST FETCH ADMIN OK
// (async () => {
//   const token =
//     "";

//   const result = await fetchAllNewsAdmin(0, token);
//   console.log(result);
// })();

export const fetchAllNews = async (page: number = 1): Promise<ApiResponse<NewsResponse[]>> => {
  try {
    const result: AxiosResponse<ApiResponse<NewsResponse[]>> = await axios.get("/api/news", {
      params: {
        page,
      },
    });
    return result.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) return error.response.data as ApiErrorResponse;
    return unhandledError;
  }
};

// TEST FETCH OK
// (async () => {
//   const result = await fetchAllNews(1);
//   console.log(result);
// })();

export const fetchNews = async (id: number): Promise<ApiResponse<News>> => {
  try {
    const result: AxiosResponse<ApiResponse<News>> = await axios.get(`/api/news/${id}`);
    return result.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) return error.response.data as ApiErrorResponse;

    return unhandledError;
  }
};

// TEST FETCH ID OK
// (async () => {
//   const result = await fetchNews(2);
//   console.log(result);
// })();

export const postNewsDraft = async (
  formData: FormData,
  token: string
): Promise<ApiResponse<string>> => {
  try {
    const result: AxiosResponse<ApiResponse<string>> = await axios.post(
      "http://localhost:3000/api/news",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return result.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) return error.response.data as ApiErrorResponse;
    return unhandledError;
  }
};

export const updateNewsDraft = async (
  formData: FormData,
  token: string
): Promise<ApiResponse<string>> => {
  try {
    const result: AxiosResponse<ApiResponse<string>> = await axios.put(
      "http://localhost:3000/api/news",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return result.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) return error.response.data as ApiErrorResponse;
    return unhandledError;
  }
};

export const publishNewsDraft = async (
  id: number,
  formData: FormData,
  token: string
): Promise<ApiResponse<string>> => {
  try {
    const result: AxiosResponse<ApiResponse<string>> = await axios.patch(
      `http://localhost:3000/api/news/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return result.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) return error.response.data as ApiErrorResponse;
    return unhandledError;
  }
};

export const deleteNews = async (id: number, token: string): Promise<ApiResponse<string>> => {
  try {
    const result: AxiosResponse<ApiResponse<string>> = await axios.delete(
      `http://localhost:3000/api/news/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return result.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) return error.response.data as ApiErrorResponse;
    return unhandledError;
  }
};
