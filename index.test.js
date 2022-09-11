const sut = require("./index");

// #1 ❌중복발생
// test('sut transforms "hello  world" to "hello world"', () => {
//   const actual = sut("hello  world");
//   expect(actual).toBe("hello world");
// });
// test('sut transforms "hello    world" to "hello world"', () => {
//   const actual = sut("hello    world");
//   expect(actual).toBe("hello world");
// });
// test('sut transforms "hello   world" to "hello world"', () => {
//   const actual = sut("hello     world");
//   expect(actual).toBe("hello world");
// });

// #2 ✅For문으로 중복제거 / ❌테스트 명세 불확실
// test("sut transforms correctly", () => {
//   const sources = ["hello  world", "hello    world", "hello     world"];
//   sources.forEach((source) => {
//     const actual = sut(source);
//     expect(actual).toBe("hello world");
//   });
// });

// #3 ✅.each 사용으로 테스트 source 명세 구체화
test.each([
  { source: "hello  world" },
  { source: "hello    world" },
  { source: "hello     world" },
])(`sut transforms "$source" correctly`, ({ source }) => {
  const actual = sut(source);
  expect(actual).toBe("hello world");
});
