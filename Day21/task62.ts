// Question 62:
// Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

// Explain & TIP: This blueprint, called an interface, helps ensure all students have the same kind of information, making your code more organized.



// Answer:


// Define an interface to represent the structure of a student object
interface Student {
    name: string;
    age: number;
    classes: string[];
}



// Create an instance of a student object
let student: Student = {
    name: "Parizah",
    age: 16,
    classes: ["Python", "JavaScript", "TypeScript"]
}



// Print the student object to the console
console.log(student);


// Print the student's age
console.log(student.age);