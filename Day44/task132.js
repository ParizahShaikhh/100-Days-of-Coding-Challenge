// Question 132:
// Discuss the difference between default and named exports in JavaScript modules.
// Explain & TIP: JavaScript provides two main types of exports: default and named. A module can have only one default export, but multiple named exports. This flexibility supports various use cases in module design.
// Answer:
// /*.....*/ export: /*.....*/
export default class abc {
}
// named export examples
export const xyz = () => {
    /*...*/
};
export const pqr = () => {
    /*...*/
};
// /*.....*/ import: /*.....*/
// import abc from './task130.js';
// import { xyz } from "./task131.js";
