const functionTests = {
  stringLength: string => {
    const strLen = string.length;
    if(strLen < 1 || strLen > 10) throw "invalid";
    return  strLen;
  },
  reverseString: string => string.split('').reverse().join('')
}

module.exports = functionTests;