class calculator {
  constructor(){

  }

  add = (...nums) => {
    return Array.from(nums).length > 1? nums.reduce(((prev,current) => prev + current),0) : 'invalid';
  }

  subtract() {
    return arguments.length > 1 ? arguments[0] - arguments[1] : 'invalid';
  }

  divide() {
    return arguments.length > 1 ? Math.floor((arguments[0]/arguments[1])): 'invalid';
  }

  multiply() {
    return arguments.length > 1 ? Math.floor((arguments[0] * arguments[1])): 'invalid';
  }

  capitalize = (str) => typeof str === 'string' ? str[0].toUpperCase().concat(str.slice(1).toLowerCase()) : 'not string';
}

module.exports = calculator;