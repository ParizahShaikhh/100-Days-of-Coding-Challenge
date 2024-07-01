"use strict";
// Question 132:
// Discuss the difference between default and named exports in JavaScript modules.
Object.defineProperty(exports, "__esModule", { value: true });
exports.pqr = exports.xyz = void 0;
// Explain & TIP: JavaScript provides two main types of exports: default and named. A module can have only one default export, but multiple named exports. This flexibility supports various use cases in module design.
// Answer:
// /*.....*/ export: /*.....*/
class abc {
}
exports.default = abc;
// named export examples
const xyz = () => {
    /*...*/
};
exports.xyz = xyz;
const pqr = () => {
    /*...*/
};
exports.pqr = pqr;
// /*.....*/ import: /*.....*/
// import abc from './task130.js';
// import { xyz } from "./task131.js";
