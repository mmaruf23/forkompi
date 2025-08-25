// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NextApiRequest } from "next";

declare module "next" {
  export interface NextApiRequest {
    userId?: number; // Tambahkan properti khusus di sini
  }
}
