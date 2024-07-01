// Question 125:
// Modify a method in an object to use the this keyword to access another property in the same object.
// Explain & TIP: You can leverage the this keyword to interact with multiple properties within the same object, providing a cohesive way to manipulate internal data.
// Answer:
// Define an object to represent a car
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2021,
    describe: function () {
        console.log(` ${this.year}\n ${this.make}\n ${this.model}`);
    }
};
// Call the describe method to log information about the car
car.describe();
export {};
