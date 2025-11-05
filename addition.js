/**
 * @file addition.js
 * @description This file defines the Addition class that performs basic addition operations.
 * It follows standard coding conventions and uses JSDoc for documentation.
 * @version 1.0
 * @author Sumaiya
 */

/**
 * Class representing basic addition operations.
 */
class Addition {
  /**
   * Create an Addition object.
   * @param {number} num1 - The first number.
   * @param {number} num2 - The second number.
   */
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  /**
   * Add the two numbers stored in the object.
   * @returns {number} The sum of num1 and num2.
   */
  add() {
    return this.num1 + this.num2;
  }

  /**
   * Overloaded function: add two numbers directly.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number} The sum of a and b.
   */
  static addTwo(a, b) {
    return a + b;
  }

  /**
   * Overloaded function: add three numbers.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @param {number} c - The third number.
   * @returns {number} The total sum of a, b, and c.
   */
  static addThree(a, b, c) {
    return a + b + c;
  }

  /**
   * Display the current numbers.
   */
  displayNumbers() {
    console.log(`Number 1: ${this.num1}`);
    console.log(`Number 2: ${this.num2}`);
  }
}

// Example usage
const addObj = new Addition(10, 20);
addObj.displayNumbers();

console.log("Sum (object method):", addObj.add());
console.log("Sum (two numbers):", Addition.addTwo(3.5, 4.5));
console.log("Sum (three numbers):", Addition.addThree(5, 10, 15));
