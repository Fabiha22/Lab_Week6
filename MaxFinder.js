/**
 * A class that finds the maximum among three numbers.
 * @class
 */
class MaxFinder {
  /**
   * Returns the maximum of three numbers.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @param {number} c - The third number.
   * @returns {number} The largest number among a, b, and c.
   */
  static findMax(a, b, c) {
    return Math.max(a, b, c);
  }
}

// Example usage:
console.log("Max value:", MaxFinder.findMax(10, 25, 15));
