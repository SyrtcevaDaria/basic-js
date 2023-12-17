const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  'l': 0,
  'ch': [],
  getLength() {
    return this.l
  },
  addLink(value) { 
    if (arguments.length === 0) { 
      this.ch[this.l] = "( )"; 
    } else { 
      this.ch[this.l] = `( ${value} )`; 
    } 
    this.l += 1; 
    return this; 
  },
  removeLink(position) {
    if(position<=0 || typeof(position)!=='number' || position>this.l){
      this.ch = [];
      this.l = 0;
      throw new Error('You can\'t remove incorrect link!');
    }
    this.ch.splice(position-1, 1);
    this.l-=1;
    return this;
  },
  reverseChain() {
    this.ch.reverse();
    return this;
  },
finishChain() {
  const res = this.ch.join('~~');
  this.ch = [];
  this.l = 0;
  return res;
}
};

module.exports = {
  chainMaker
};





