/**
 * @file multiplication.js
 * @description Class to perform multiplication of numbers.
 * @version 1.0.0
 * @author Anonna
 */

/**
 * Class representing a multiplication operation.
 */
class Multiplication {
  /**
   * Create a Multiplication object.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @param {number} c - The third number.
   */
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  /**
   * Multiply three numbers (object attributes) and return the result.
   * @returns {number} The multiplication result.
   */
  multiplyThree() {
    return this.a * this.b * this.c;
  }

  /**
   * Multiply any two numbers passed as arguments.
   * @param {number} x - First number.
   * @param {number} y - Second number.
   * @returns {number} The multiplication result.
   */
  multiplyTwo(x, y) {
    return x * y;
  }
}

// Example usage:
const obj = new Multiplication(2, 3, 4);
console.log("Multiply three numbers:", obj.multiplyThree());
console.log("Multiply two numbers:", obj.multiplyTwo(5, 6));
