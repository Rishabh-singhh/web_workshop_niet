//function
function addNumbers(a: number, b: number): number {
    return a + b;
  }
  

  const result = addNumbers(5, 3);
  

  console.log(result);



// calculator
type Operation = 'add' | 'subtract' | 'multiply' | 'divide';


function calculate(operation: Operation, a: number, b: number): number | string {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) {
                return 'Error: Division by zero is not allowed.';
            }
            return a / b;
        default:
            return 'Error: Invalid operation.';
    }
}


const operation: Operation = 'add';
const num1: number = 10;
const num2: number = 5;

const result = calculate(operation, num1, num2);
console.log(`Result: ${result}`);




// 