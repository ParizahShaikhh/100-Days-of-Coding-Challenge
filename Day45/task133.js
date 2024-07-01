// Question 133:
// Write a JavaScript object and convert it into a JSON string.
// Explain & TIP: JSON (JavaScript Object Notation) is a lightweight data-interchange format. It's easy for humans to read and write and for machines to parse and generate. Converting a JavaScript object into a JSON string can be done using JSON.stringify().
// Answer:
// Create a JavaScript object
let myObj = {
    name: "Parizah",
    age: 16,
};
// Convert the object into a JSON string
let myJSON = JSON.stringify(myObj);
console.log(myJSON);
export {};
