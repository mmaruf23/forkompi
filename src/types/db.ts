export type InsertQuery = {
  affectedRows: number;
  fieldCount: number;
  info: string;
  insertId: number;
  serverStatus: number;
  warningStatus: number;
};

export type SelectQuery<T> = [T];
