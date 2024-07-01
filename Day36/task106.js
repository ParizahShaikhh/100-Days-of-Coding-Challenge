"use strict";
// Question 106:
// Determine if a given year is a leap year using comparison operators.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: A leap year is divisible by 4 but not by 100 unless it's also divisible by 400. This rule helps align our calendar years with the Earth's orbital period.
// Answer:
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2020));
console.log(isLeapYear(1900));
