"use strict";
// Question 116:
// Create a switch case that matches several cases to the same code block, representing seasons.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: You can group multiple case statements together when they should execute the same block of code, which is handy for categorizing items into broader groups.
// Answer:
// Create a switch statement that matches several cases to the same code block, representing seasons.
function logSeason(seasonMonth) {
    // Use a switch statement to match several cases to the same code block, representing seasons.
    switch (seasonMonth) {
        case "December":
        case "January":
        case "February":
            console.log("Winter");
            break;
        case "March":
        case "April":
        case "May":
            console.log("Spring");
            break;
        case "June":
        case "July":
        case "August":
            console.log("Summer");
            break;
        case "September":
        case "October":
        case "November":
            console.log("Autumn");
            break;
        default:
            console.log("Invalid month");
    }
}
// Example Usage
logSeason("December");
logSeason("March");
logSeason("July");
logSeason("September");
logSeason("nothing");
