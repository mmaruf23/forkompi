export type ResultSetHeader = {
  affectedRows: number;
  fieldCount: number;
  info: string;
  insertId: number;
  serverStatus: number;
  warningStatus: number;
};

export type ResultSelectQuery<T> = [T];
