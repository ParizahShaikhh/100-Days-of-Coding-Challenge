// Question 92:
// Write a function to remove the last element from an array and return the removed element.
// Explain & TIP: The .pop() method removes the last element from an array and returns that element. This can be useful when you need to work with the removed item.
// Answer:
// Define the remove_last function
function remove_last(array) {
    // Remove the last element from the array
    let lastElement = array.pop();
    // Return the removed element
    return lastElement;
}
// Call the remove_last function with an array of numbers
let numbers = [1, 2, 3, 4, 5];
let removedElement = remove_last(numbers);
console.log("Removed element:", removedElement);
// Call the remove_last function with an array of strings
let strings = ["Hello", "World", "How", "Are", "You"];
let removedString = remove_last(strings);
console.log("Removed string:", removedString);
export {};
