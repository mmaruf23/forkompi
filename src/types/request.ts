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
