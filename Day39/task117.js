// Question 117:
// Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
// Explain & TIP: The default case in a switch statement provides a way to execute a block of code when none of the other case labels match the expression's value.
// Answer:
// Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
function evaluateExpression(expression) {
    // Use a switch statement to evaluate an expression and uses the default case if none of the cases match.
    switch (expression) {
        case "+":
            console.log("Addition");
            break;
        case "-":
            console.log("Subtraction");
            break;
        case "*":
            console.log("Multiplication");
            break;
        case "/":
            console.log("Division");
            break;
        default:
            console.log("Unknown operator");
            break;
    }
}
evaluateExpression("+");
evaluateExpression("-");
evaluateExpression("*");
evaluateExpression("/");
evaluateExpression(",");
export {};
