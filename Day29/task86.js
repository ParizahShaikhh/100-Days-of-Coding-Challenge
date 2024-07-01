// Question 86:
// Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
// Explain & TIP: The .includes() method lets you check if a string contains a certain piece of text, returning a boolean (true or false).
// Answer:
// Define the check_text_presence function
function check_text_presence(text) {
    return text.includes("JavaScript");
}
console.log(check_text_presence("I love coding in JavaScript!"));
console.log(check_text_presence("I love coding in Python!"));
export {};
