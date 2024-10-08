// Question 131:
// Create two modules; one that exports a class, and another that imports the class and creates an instance.

// Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and reusability is a cornerstone of modern JavaScript application structure.




// Answer:

// Define a class

class Person {
    constructor(public name: string, public age: number){
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


// Export the class

export default Person;




// Import the class

// import Person from "./task131";

// Create an instance

let myPerson = new Person("Parizah", 16);

// Call the greet method


myPerson.greet();


