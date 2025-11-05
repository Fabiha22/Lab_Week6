/**
 * @file Subtraction.js
 * @brief A class that performs subtraction operations on numbers.
 *
 * This class demonstrates method overloading behavior in JavaScript
 * by handling different parameter types for subtraction.
 * 
 * @author Anika
 * @date 2025-11-05
 */

class Subtraction {
  /**
   * Creates a new Subtraction object.
   * @param {number} [initialResult=0] - The initial value of the result.
   */
  constructor(initialResult = 0) {
    this.result = initialResult;
  }

  /**
   * Subtracts two integer values.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number} The result of a - b.
   */
  subtractInt(a, b) {
    this.result = a - b;
    return this.result;
  }

  /**
   * Subtracts two floating point numbers.
   * @param {number} a - The first float.
   * @param {number} b - The second float.
   * @returns {number} The result of a - b.
   */
  subtractFloat(a, b) {
    this.result = a - b;
    return this.result;
  }

  /**
   * Displays the last calculated result.
   */
  displayResult() {
    console.log(`Result: ${this.result}`);
  }
}

// Example run
const sub = new Subtraction();
console.log(sub.subtractInt(15, 6));  // Output: 9
console.log(sub.subtractFloat(9.5, 4.2));  // Output: 5.3
sub.displayResult();
