// Question 113:
// Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

// Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.



// Answer:

// Create a Map to store the names of countries as keys and their capitals as values

const capitals = new Map<string, string>();

// Add three countries to the Map

capitals.set("France", "Paris"); // adds France to the Map 
capitals.set("USA", "Washington, D.C."); // adds USA to the Map 

capitals.set("Japan", "Tokyo"); // adds Japan to the Map 


console.log(capitals);




// Answer of Q13:



// This function checks for "Canada" in the Map and logs its capital
function logCapitalOfCanada(countries: Map<string, string>): void {
    if (countries.has("Canada")) {
        console.log(`The capital of Canada is ${countries.get("Canada")}.`);
    } else {
        console.log("Canada is not in the Map.");
    }
}


// Assuming countries Map from Question 112
logCapitalOfCanada(capitals);

// Checks if Canada is in our Map and logs the capital if it exists.