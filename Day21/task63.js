// Question 63:
// Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
// Creating a circle
const circle = {
    kind: "Circle",
    radius: 10
};
// Creating a rectangle
const rectangle = {
    kind: "Rectangle",
    width: 10,
    height: 20
};
console.log(circle);
console.log(rectangle);
export {};
