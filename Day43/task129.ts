// Question 129:
// Explain how "this" behaves differently in arrow functions compared to traditional functions.

// Explain & TIP: In traditional functions, this refers to the object that called the function, which can vary depending on the context. In arrow functions, this is lexically bound, meaning it uses this from the code that contains the arrow function.



// Answer:


const traditionalVsArrow = {
    value: "TraditionalVsArrow value",
    traditionalFunc: function () {
        console.log("Traditional function:", this.value);
    },
    arrowFunc: () => {
        // console.log("Arrow Function:", this.value);
    },
};


traditionalVsArrow.traditionalFunc();

traditionalVsArrow.arrowFunc();