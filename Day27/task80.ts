// Question 80:
// Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.



// Explain & TIP: You can add new properties to an object or change existing ones after the object is created. This flexibility allows objects to be dynamically updated as needed.




// Answer:

// Define a car object

const car: any = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
}

// Add a new property to the car object


car.color = "black";

// Update an existing property

car.year = 2021;

// Print the updated car object

console.log(car);
