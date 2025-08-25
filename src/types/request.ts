import type { File } from "formidable";

export type RegisterRequest = {
  username: string;
  firstName: string;
  lastName?: string;
  password: string;
};

export type LoginRequest = {
  username: string;
  password: string;
};

export type UpdateUserRequest = {
  username?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
};

export type NewsPostRequest = {
  title?: string;
  subtitle?: string;
  content?: string;
  images?: File;
};
