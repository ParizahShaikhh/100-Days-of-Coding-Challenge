// Question 99:
// Generate a date object representing your next birthday and log it to the console.

// Explain & TIP: When creating a Date object for a future event like a birthday, you might need to adjust the year based on whether the birthday has already occurred this year or not.



// Answer:

function getNextBirthday(month: number, day: number): Date {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month -1, day);

    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}

const nextBirthday = getNextBirthday(3, 23);

console.log("Next birthday on", nextBirthday.toLocaleDateString());