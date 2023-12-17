const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(flag=true) {
    this.flag = flag;
  }
  encrypt(str, key) {
    if(str==undefined||key==undefined){
      throw new Error ('Incorrect arguments!')
    }
    let alf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let alf2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let res = ''
    let numL = 0;
    for(let i=0;i<str.length;i++ ){
      let el = str[i];
      if(!alf.includes(el) && !alf2.includes(el)){
        res+=el;
        continue;
      }
      let idx = alf.indexOf(el);
      if(idx==-1){
        idx = alf2.indexOf(el);
      }
      let keyLetter = key[numL%key.length];
      let idxKeyLetter = alf.indexOf(keyLetter);
      if(idxKeyLetter==-1){
        idxKeyLetter = alf2.indexOf(keyLetter);
      }
      let newIdx = (idx+idxKeyLetter)%alf.length;
      res+=alf[newIdx];
      numL+=1
    }
    if(this.flag){
      return res
    }
    else{
      return res.split('').reverse().join('')
    }
  }
    decrypt(str, key) {
      if(str==undefined||key==undefined){
        throw new Error ('Incorrect arguments!')
      }
          let alf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let alf2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let res = ''
    let numL = 0;
    for(let i=0;i<str.length;i++ ){
      let el = str[i];
      if(!alf.includes(el) && !alf2.includes(el)){
        res+=el;
        continue;
      }
      let idx = alf.indexOf(el);
      if(idx==-1){
        idx = alf2.indexOf(el);
      }
      let keyLetter = key[numL%key.length];
      let idxKeyLetter = alf.indexOf(keyLetter);
      if(idxKeyLetter==-1){
        idxKeyLetter = alf2.indexOf(keyLetter);
      }
      let newIdx = idx-idxKeyLetter;
      if(newIdx<0){
        newIdx=newIdx+alf.length;
      }
      res+=alf[newIdx];
      numL+=1
    }
    if(this.flag){
      return res
    }
    else{
      return res.split('').reverse().join('')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
