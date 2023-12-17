const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!(arr instanceof Array)) {
      return 0;
    }
    let maxD = 1;
    for (let item of arr) {
      if (Array.isArray(item)) {
        let thisD = this.calculateDepth(item) + 1;
        if (thisD > maxD) {
          maxD = thisD;
        }
      }
    }

    return maxD;
  }
}

module.exports = {
  DepthCalculator
};
