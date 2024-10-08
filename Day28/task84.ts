// Question 84:
// Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".


// Explain & TIP: The .replace() method can search for a specific text pattern in a string and replace it with something else. By default, it only replaces the first occurrence, but you can use a global regex for multiple replacements.



// Answer:

// Define a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript"

function replaceText(sentence: string): string {
    // Replace all instances of the word "JavaScript" with "TypeScript"
    return sentence.replace(/JavaScript/g, "TypeScript");
}

// Call the function with a sentence

console.log(replaceText("JavaScript is the best programming language in the world!"));

