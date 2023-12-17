const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = ''
  for(let i=0;i<str.length;i++){
    let count = 0;
    for(let j=i;j<str.length;j++){
      if(str[i]==str[j]){
        count+=1
      }
       else if((str[i]!==str[j])){
        res+=count>1?`${count}${str[i]}`: `${str[i]}`;
        j=str.length;
        i+=count-1
      }
      if(j==str.length-1){
        res+=count>1?`${count}${str[i]}`: `${str[i]}`;
        i+=count-1
      }
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
