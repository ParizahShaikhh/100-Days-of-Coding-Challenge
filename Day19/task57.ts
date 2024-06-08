// Question 57:
// Find the Average Grade: Given a list of grades, calculate the average grade.



// Answer:

// Define the functions findAverageGrade
function findAverageGrade(grades: number[]): number {
    let sum = 0;
    // Loop through the grades array and add each grade to the sum variable
    for (let i = 0; i < grades.length; i++) {
        // Add each grade to the sum
        sum += grades[i];
    }
    // Return the average grade
    return sum / grades.length;
}


// Call the function and log the result
console.log(findAverageGrade([90, 80, 88, 90, 95]));

