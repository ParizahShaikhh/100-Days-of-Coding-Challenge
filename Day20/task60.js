// Question 60:
// Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
// Answer:
class UserProfile {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getProfile() {
        return `Name: ${this.name}, Age: ${this.age}.`;
    }
}
// Self setup function to create and log the profile
function setupUserProfile() {
    let user = new UserProfile("Parizah Shaikh", 16);
    console.log(user.getProfile());
}
// Run the self-setup function
setupUserProfile();
export {};
