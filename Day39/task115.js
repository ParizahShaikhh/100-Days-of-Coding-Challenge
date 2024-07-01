"use strict";
// Question 115:
// Use a switch statement to log the days of the week based on a number (1-7).
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: A switch statement is a great way to select one of many code blocks to be executed. It's particularly useful for scenarios like mapping numbers to days of the week.
// Answer:
// Define a function to log the days of the week based on a number (1-7)
function logDayOfWeek(dayNumber) {
    // Use a switch statement to log the days of the week based on a number (1-7)
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number");
    }
}
logDayOfWeek(3); // Wednesday
