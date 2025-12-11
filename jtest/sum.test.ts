import { fetchUser, sum, sumId } from "./sum";

describe("sum - integer", () => {
  // beforeAll(() => {
  // console.log("beforeAll");
  // });

  test("sum - 3 with 1, 2", () => {
    const tot = sum(1, 2);
    expect(tot).toBe(3);
  });

  test("sum - 0 with no-params", () => {
    expect(sum()).toBe(0);
  });
});

describe("sumUserId", () => {
  test("users count", async () => {
    const sumUserId = await sumId();
    expect(sumUserId).toBe(55);
  });
});

describe("user-fetch-test", () => {
  test("users sum of ids", async () => {
    const sumUserId = await sumId();
    expect(sumUserId).toBe(55);
  });

  test("fetchUser with 1", async () => {
    const bret = { id: 1, username: "Bret" };
    expect(await fetchUser(bret.id)).toStrictEqual(bret);

    //테스트가 끝나기 전에 출력을 위해 await 붙여야 하는 것 좋지 않다.
    await expect(fetchUser(bret.id)).resolves.toStrictEqual(bret);
  });
  //? why???
  test("fetchUser with not-exists userId", async () => {
    // const user100 = await fetchUser(100);
    // expect(user100.id).toBeUndefined();
    // console.log("🚀 ~ user100:", user100);

    await expect(fetchUser(100)).rejects.toThrow(`100 User Not Found!`);
  });

  test("fetchUser with not-exists userId", async () => {
    await expect(fetchUser(100)).rejects.toThrow(`100 User Not Found!`);
  });
});
