// sum.test.ts;
import { sumId } from "./sum";

const mockFetch = jest.fn();
global.fetch = mockFetch;

describe.only("sum", () => {
  test("sumId", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => Array.from({ length: 10 }, (_, i) => ({ id: i + 1 })),
    });

    const totId = await sumId();
    expect(totId).toBe(55);
  });
});
