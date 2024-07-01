// Question 63:
// Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

// Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for describing more complex information, such as the details of different shapes.




// Answer:


// Creating a custom type (type alias) for shapes that could be circle or rectangle
type Shape = {
    kind: "Circle" | "Rectangle";
    // for circle
    radius?: number;
    // for rectangle
    width?: number;
    height?: number;
};




// Creating a circle
const circle: Shape = {
    kind: "Circle",
    radius: 10
};



// Creating a rectangle
const rectangle: Shape = {
    kind: "Rectangle",
    width: 10,
    height: 20
};



console.log(circle);

console.log(rectangle);