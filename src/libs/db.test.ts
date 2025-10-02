import { test, describe } from "node:test";
import { getConnection } from "./db";
import assert from "node:assert";

describe("test koneksi database", () => {
  test("test koneksi berhasil", async () => {
    const conn = await getConnection();
    assert.ok(conn);
  });
});
