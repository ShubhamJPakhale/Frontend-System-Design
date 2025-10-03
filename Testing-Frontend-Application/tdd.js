// Test Driven Development

function isPalindrome(str) {
  if (!str) return null; // handle null and undefined
  if (typeof str === "boolean") return null; // handle boolean values
  if (typeof str === "number") str = str.toString(); // convert number to string
  if (typeof str !== "string") return null; // handle non-string and non-number types

  if (str.length > 10) return null; // handle strings longer than 10 characters
  if (str.length === 1) return true; // single character is always a palindrome

  str = str.replace(/[^0-9a-zA-Z]/g, "").toLowerCase(); // normalize string
  const reversed = str.split("").reverse().join("");
  if (str === reversed) return true;
  else return false;
}
  
module.exports = isPalindrome;
