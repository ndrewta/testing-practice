import {
  capitalise,
  reverseString,
  calculator,
  caesarCipher,
  analyseArray,
} from "./script";

test("first letter if capitalise", () => {
  expect(capitalise("hello")).toBe("Hello");
});

test("reversed string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("add", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtract", () => {
  expect(calculator.subtract(10, 3)).toBe(7);
});

test("divide", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("multiply", () => {
  expect(calculator.multiply(4, 4)).toBe(16);
});

test("caesarCipher", () => {
  expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
});

test("analyse array - return avg, min, max, length", () => {
  const obj = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(analyseArray([1, 8, 3, 4, 2, 6])).toMatchObject(obj);
});
