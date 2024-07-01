"use strict";
// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
Object.defineProperty(exports, "__esModule", { value: true });
// Answer:
// Define a nested object representing skills
let programmerSkills = {
    languages: ["JavaScript", "Python", "Java"],
    tools: ["Git", "VS Code", "Docker"],
    frameworks: ["React", "Node.js", "Spring Boot"]
};
// Extract three specific skills
let { languages, tools, frameworks } = programmerSkills;
let specificSkills = {
    languages: languages[0],
    tool: tools[1],
    frameworks: frameworks[2]
};
// Log the specific skills
console.log("Specific Skills:");
console.log("Programming Language:", specificSkills.languages);
console.log("Tool:", specificSkills.tool);
console.log("Framework:", specificSkills.frameworks);
