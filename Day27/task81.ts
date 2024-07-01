// Question 81:
// Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.



// Explain & TIP: You can loop through each property of an object using a for...in loop. This is useful for when you need to examine or display all the information an object holds.



// Answer:

// Define a function that takes an object as an argument and logs all of its properties and values

function logObjectProperties(obj: Record<string, any>): void {
    // Loop through each property of the object
    for (const prop in obj) {
        // Log the property and its value
        console.log(`${prop}:${obj[prop]}`);
        
    }
}

// Using the function with a car object
logObjectProperties({ make: 'Toyota',
model: 'Camry', 
year: 2021,
color: 'black',
});

