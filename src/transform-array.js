const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!(Array.isArray(arr))){
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let myArray = ['--discard-next','--discard-prev','--double-next','--double-prev'];
  let newArray=[];
  for(let i=0;i<arr.length;i++){
    console.log(newArray, i);
    if(!myArray.includes(arr[i])){
      newArray[newArray.length] = arr[i];
    }
    else{
      switch(arr[i]){
        case '--discard-prev':
          if(newArray[i-1]!==undefined){
            newArray.pop()
          }
          break;
        case '--discard-next':
          i++;
          break;
        case '--double-next':
          if(arr[i+1]!==undefined && !myArray.includes(arr[i+1])){
            newArray[newArray.length] = arr[i+1];
          }
          break;
        case '--double-prev':
          if(arr[i-1]!==undefined && !myArray.includes(arr[i-1]) && arr[i-2]!=='--discard-next'){
            newArray[newArray.length] = arr[i-1];
          }
          break;
        default:
          newArray[i]=arr[i]
      }
    }
  }
  return newArray
}

module.exports = {
  transform
};
