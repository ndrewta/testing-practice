import { capitalise, reverseString } from "./scripts";

test("first letter if capitalise", () => {
  expect(capitalise("hello")).toBe("Hello");
});

test("reversed string", () => {
  expect(reverseString("hello")).toBe("olleh");
});
