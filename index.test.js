const { refineText } = require("./index");

test('refineText transform "hello  world" to "hello world"', () => {
  const actual = refineText("hello  world");
  expect(actual).toBe("hello world");
});
