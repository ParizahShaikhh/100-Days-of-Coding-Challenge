// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.


// Answer:
// Define a function with a rest parameter representing hobbies
function logHobbies(...hobbies: string[]): void {
    // Loop through each hobby and log a statement
    hobbies.forEach(hobby => {
        console.log(`You enjoy ${hobby}.`);
    });
}

// Call the function with multiple hobbies
logHobbies("reading", "hiking", "painting");