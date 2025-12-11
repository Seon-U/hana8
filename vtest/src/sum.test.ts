import { describe, expect, test } from "vitest";
import { fetchUser, sum, sumId } from '../sum';
import { BRET } from "./data.test";


describe('sum -', ()=> {
  test('sum - 3 with 1,2', () => {
    const tot = sum(1,2);
    expect(tot).toBe(3);
  });

  test('sum - 5 args', () => {
    expect(sum(1,2,3,4,5)).toBe(15);
  })

  test('sum - 0 with no args', () => {
    expect(sum()).toBe(0);
  })
})

describe('sumId', () => {
  test('sumId - all', async () => {
    const totId = await sumId();
    expect(totId).toBe(55)
  })
})

describe('sumUserId', () => {
  test("users count", async () => {
    expect(await sumId()).toBe(55);
  })
})


describe('sumId & fetchUser', () => {
  test('sumId - all', async () => {
    const totId = await sumId();
    expect(totId).toBe(55);
  })

  test('fetchUser - 1', async ()=> {
    expect(await fetchUser(1)).toStrictEqual(BRET);
    return expect(fetchUser(1)).resolves.toStrictEqual(BRET);
  })
})


describe("user-fetch-test", () => {
  test("users sum of ids", async () => {
    const bret = { id: 1, username: "Bret" };
    expect(await fetchUser(bret.id)).toStrictEqual(bret);

    //테스트가 끝나기 전에 출력을 위해 await 붙여야 하는 것 좋지 않다.
    await expect(fetchUser(bret.id)).resolves.toStrictEqual(bret);
  })

  test("fetchUser with 1", async () => {
    const bret = { id: 1, username: "Bret" };
    expect(await fetchUser(bret.id)).toStrictEqual(bret);

    //테스트가 끝나기 전에 출력을 위해 await 붙여야 하는 것 좋지 않다.
    await expect(fetchUser(bret.id)).resolves.toStrictEqual(bret);
  });
  //? why???
  test("fetchUser with not-exists userId", async () => {
    // const user100 = await fetchUser(100);
    // expect(await fetchUser(100)).toBeUndefined()
    // console.log("🚀 ~ user100:", user100);
    // user100.id
    await expect(fetchUser(100)).rejects.toThrow(`100 User Not Found!`);
  });
})