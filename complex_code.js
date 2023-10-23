/**
 * Filename: complex_code.js
 * 
 * Description: A sophisticated and elaborate JavaScript code demonstrating various concepts and techniques.
 * 
 * Authors: John Doe, Jane Smith
 */

// Define a class for representing a Point in 2D space
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `(${this.x}, ${this.y})`;
    }

    distanceTo(other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

// Define a utility function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Define an array of words and sort them in alphabetical order
const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
words.sort();

// Create an instance of the Point class
const p1 = new Point(2, 3);
const p2 = new Point(5, 8);

// Calculate the distance between two points
const distance = p1.distanceTo(p2);

// Create a function to calculate the Fibonacci sequence up to a given number of terms
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Call the factorial and fibonacci functions
const factorialValue = factorial(5);
const fibonacciSequence = fibonacci(10);

// Perform some array operations
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
const evenNumbers = numbers.filter(num => num % 2 === 0);
const sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);

// Define a function to calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

// Calculate the area of a circle with radius 5
const circleArea = calculateCircleArea(5);

// Display the results
console.log("Sorted words:", words);
console.log("Distance between", p1.toString(), "and", p2.toString(), "is", distance);
console.log("Factorial of 5 is", factorialValue);
console.log("Fibonacci sequence of length 10:", fibonacciSequence);
console.log("Doubled numbers:", doubledNumbers);
console.log("Even numbers:", evenNumbers);
console.log("Sum of numbers:", sumOfNumbers);
console.log("Area of a circle with radius 5 is", circleArea);