export type ApiSuccessResponse<T> = {
  code: number;
  status: "success";
  data?: T;
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
