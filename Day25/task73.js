// Question 73:
// Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.
// Explain & TIP: In JavaScript, you can assign a value to a variable with = and later update it as needed. This is fundamental for keeping track of changing data within your programs.
// Answer:
// Declare a variable using let and assign an initial value inside a function
function updateVariable() {
    let myVariable = 10;
    console.log(myVariable);
    // Update the value of the variable within the same function
    myVariable = 20;
    console.log(myVariable);
}
// Call the function
updateVariable();
export {};
