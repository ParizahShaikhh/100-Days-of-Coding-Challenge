// Question 108:
// Compare two strings to check if they are identical, ignoring case sensitivity.
// Explain & TIP: To compare strings without considering their case (uppercase/lowercase), you can convert both strings to the same case before comparing.
// Answer:
// Define a function to check if two strings are identical, ignoring case sensitivity
function areStringsIdentical(str1, str2) {
    // Convert both strings to the same case
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringsIdentical("Hello", "hello")); // true
console.log(areStringsIdentical("Hello", "HelO")); // false
export {};
