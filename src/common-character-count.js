const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let d = {};
  let d2 = {}
  for(let i=0;i<s1.length;i++){
    d[`${s1[i]}`] = (d[`${s1[i]}`]||0)+1;
  }
  for(let i=0;i<s2.length;i++){
    d2[`${s2[i]}`] = (d2[`${s2[i]}`]||0)+1;
  }
  let res = 0
  for (var k1 in d) {
    for (var k2 in d2) {
        if(k1==k2){
            res+=Math.min(d[k1], d2[k2])
        }
    }
}
return res
}

module.exports = {
  getCommonCharacterCount
};
