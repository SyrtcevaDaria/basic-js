const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  if (!(str instanceof String) ){
    str = `${str}`
  }
  let fl = 1;
  if(options.addition==undefined){
    fl=0
  }
  if(fl){
    if (!(options.addition instanceof String) ){
      options.addition = `${options.addition}`
    }
  }
  let addStr = ''
  let mainStr= ''
  if(options.additionRepeatTimes !==undefined){
    for(let i=0;i<options.additionRepeatTimes;i++){
      addStr+=options.addition
      if(i!==options.additionRepeatTimes-1){
        if(options.additionSeparator==undefined){
          addStr+='|'
        }
        else{
          addStr+=options.additionSeparator
        }
       
      }
    }
  }
  else{
    if(options.addition!==undefined){
      addStr = options.addition
    }
  }
  if(options.repeatTimes!==undefined){
    for(let i=0;i<options.repeatTimes;i++){
      mainStr+=str
      mainStr+=addStr
      if(i!==options.repeatTimes-1){
        if(options.separator==undefined){
          mainStr+='+'
        }
        else{
          mainStr+=options.separator
        }

      }
    }
  }
  else{
    mainStr+=str
    mainStr+=addStr
  }

  return mainStr
}

module.exports = {
  repeater
};
