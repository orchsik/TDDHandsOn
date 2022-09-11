const chance = require("chance").Chance();
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
  { source: "hello world", expected: "hello world" },
  { source: "hello  world", expected: "hello world" },
  { source: "hello   world", expected: "hello world" },
  { source: "hello    world", expected: "hello world" },
  { source: "hello     world", expected: "hello world" },
])(`sut transforms "$source" to "$expected"`, ({ source, expected }) => {
  const actual = sut(source);
  expect(actual).toBe(expected);
});

test.each([
  { source: "hello\t world", expected: "hello world" },
  { source: "hello \tworld", expected: "hello world" },
])(
  `sut transforms "$source" contains tab chracter to "$expected"`,
  ({ source, expected }) => {
    expect(sut(source)).toBe(expected);
  }
);

test.each([
  {
    source: "hello superman world",
    bannedWorlds: ["superman"],
    expected: "hello ******** world",
  },
])(
  `sut transforms "$source" contains banned word to "$expeceted`,
  ({ source, bannedWorlds, expected }) => {
    const actual = sut(source, bannedWorlds);
    expect(actual).toBe(expected);
  }
);

describe("sut transfrom random banned world", () => {
  const bannedWorld = chance.string();
  const source = `hello ${bannedWorld}`;
  const expected = "hello " + "*".repeat(bannedWorld.length);
  test(`sut transfrom "${source}" to "hello ${expected}"`, () => {
    const actual = sut(source, [bannedWorld]);
    expect(actual).toBe(expected);
  });
});
