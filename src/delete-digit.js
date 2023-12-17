const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let m = 0
  for(let i=0;i<n.toString().length;i++){
    let k = parseInt(n.toString().split('').filter((el,ind)=>ind!==i).join(''))
    if(k>m){
      m=k;
    }
  }
  return m;
}

module.exports = {
  deleteDigit
};
