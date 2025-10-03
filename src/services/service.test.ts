import { describe, it } from "node:test";
import { getNewsBySlug } from "./news.service";
import { equal, ok } from "node:assert";
// ini cuma contoh doang, unit test bawaan nodejs.
describe("service test", () => {
  it("harus sukses get by slug", async () => {
    const slug = "lorem-ipsum-1";
    const result = await getNewsBySlug(slug);
    ok(result.success);
    ok(result.data);
    equal(result.data.slug, slug);
  });
});
