const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if(!(date instanceof Date)) throw new Error('Invalid date!');
  if (Object.getOwnPropertySymbols(date).length !== 0) throw new Error('Invalid date!');
  let num = date.getMonth() + 1;
  if(typeof(num) !== 'number'){
    throw new Error('Unable to determine the time of year!');
  }
  if(num<3 || num==12){
    return "winter"
  }
  else if(num<6){
    return "spring"
  }
  else if(num<9){
    return "summer"
  }
  else{
    return "autumn"
  }
}


module.exports = {
  getSeason
};
