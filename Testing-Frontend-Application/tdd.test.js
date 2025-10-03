// write test cases for the - isPalindrome function
// example -
// a -> true - single entity
// null , no value -> null
// 123 -> false
// 121 -> true
// abcba -> true
// abccba -> true
// abcd -> false
// -121 -> true (negative sign ignored)
// 10 -> false
// true -> null
// false -> null
// "" -> null
// "a" -> true
// "ab" -> false
// "aba" -> true

// npm run test -- --watch -> then select a -> this will run all the test cases and watch for any changes
// npm run test -- --coverage -> this will give the code coverage of the file

// consider test cases then write test cases then write code for this to achieve 100% code coverage and pass all test cases
const isPalindrome = require("./tdd");

test("a is palindrome or not", () => {
  const result = isPalindrome("a");
  expect(result).toBe(true);
});
test("null is palindrome or not", () => {
  const result = isPalindrome(null);
  expect(result).toBe(null);
});

test("123 is palindrome or not", () => {
  const result = isPalindrome(123);
  expect(result).toBe(false);
});
test("121 is palindrome or not", () => {
  const result = isPalindrome(121);
  expect(result).toBe(true);
});
test("abcba is palindrome or not", () => {
  const result = isPalindrome("abcba");
  expect(result).toBe(true);
});
test("abccba is palindrome or not", () => {
  const result = isPalindrome("abccba");
  expect(result).toBe(true);
});
test("abcd is palindrome or not", () => {
  const result = isPalindrome("abcd");
  expect(result).toBe(false);
});
test("-121 is palindrome or not", () => {
  const result = isPalindrome(-121);
  expect(result).toBe(true);
});
test("10 is palindrome or not", () => {
  const result = isPalindrome(10);
  expect(result).toBe(false);
});
test("true is palindrome or not", () => {
  const result = isPalindrome(true);
  expect(result).toBe(null);
});
test("false is palindrome or not", () => {
  const result = isPalindrome(false);
  expect(result).toBe(null);
});

test('"" is palindrome or not', () => {
  const result = isPalindrome("");
  expect(result).toBe(null);
});

test('"ab" is palindrome or not', () => {
  const result = isPalindrome("ab");
  expect(result).toBe(false);
});

test('"abfdsfdsfdsfdsfsdfdsfsfdsfsdfds" is palindrome or not', () => {
  const result = isPalindrome("abfdsfdsfdsfdsfsdfdsfsfdsfsdfds");
  expect(result).toBe(null);
});
