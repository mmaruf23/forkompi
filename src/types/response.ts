export type ApiSuccessResponse<T> = {
  code: number;
  status: "success";
  data?: T;
  page?: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
  };
};

export type ApiErrorResponse = {
  code: number;
  status: "error";
  message: string;
};

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export type UserResponse = {
  username: string;
  firstName: string;
  lastName?: string;
};

// published only
export type NewsResponse = {
  title: string;
  subtitle: string;
  slug: string;
  thumbnail_url: string;
  content: string;
  published_at: string;
  author: { first_name: string; last_name: string };
};
