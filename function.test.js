import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
  } from "./functionsToTest.js";

test('returns string with first character capitalized', () => {
    expect(capitalize("joe")).toBe("Joe");
});

test('returns a reversed string', () => {
    expect(reverseString("joe")).toBe("eoj");
});

test('Calculator - return a sum of both numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('Calculator - return a subtraction of both numbers', () => {
    expect(calculator.subtract(3, 2)).toBe(1);
});

test('Calculator - return a multiplication of both numbers', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
});

test('Calculator - return a division of both numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test('Caesar - Returns a caesar shifted message', () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test('Caesar - Preserve capitalization', () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test('Caesar - Ignore punctuation', () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Analyze Array - standard", () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual({
      average: 5.5,
      min: 1,
      max: 10,
      length: 10,
    });
});

test("Analyze Array - Empty", () => {
    expect(analyzeArray([])).toStrictEqual({
      average: undefined,
      min: undefined,
      max: undefined,
      length: 0,
    });
});



