export type ResultSetHeader = {
  affectedRows: number;
  fieldCount: number;
  info: string;
  insertId: number;
  serverStatus: number;
  warningStatus: number;
};

export type ResultSelectQuery<T> = [T];

export type User = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  password_hash: string;
  created_at: string;
  updated_at: string;
};

export type News = {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  thumbnail_url: string;
  content: string;
  author_id: number;
  status: "draft" | "pending" | "published" | "archieved" | "deleted";
  created_at: string;
  updated_at: string;
  published_at: string;
};

export type JoinNews = {
  title: string;
  subtitle: string;
  slug: string;
  thumbnail_url: string;
  content: string;
  published_at: string;
  first_name: string;
  last_name: string;
};
