//const { default: test } = require('node:test');
//const { describe } = require('yargs');
const calculator = require('./calculator');

describe('Add numbers', () => {
  test('numbers to be added should be at least 2', () => {
    //Arrange
    const nums = [2];
    const calculatorObj = new calculator();

    //Act
    const sum = calculatorObj.add(...nums);

    //Assert
    expect(sum).toBe('invalid');
  });

  test('adding 2 + 6 + 5 should be equal to 13', () => {
    //Arrange
    const nums = [2,6,5];
    const calculatorObj = new calculator();

    //Act
    const sum = calculatorObj.add(...nums);

    //Assert
    expect(sum).toBe(13);
  });

  test('adding 1 + 7 + 9 + 0 + 3 should be equal to 20', () => {
    //Arrange
    const nums = [1,7,9,0,3];
    const calculatorObj = new calculator();

    //Act
    const sum = calculatorObj.add(...nums);

    //Assert
    expect(sum).toBe(20);
  });
});

describe('Subtract numbers', () => {
  test('numbers to be subtracted should be at least 2', () => {
    //Arrange
    const num = 2;
    const calculatorObj = new calculator();

    //Act
    const subtract = calculatorObj.subtract(num);

    //Assert
    expect(subtract).toBe('invalid');
  });

  test('Subtracting 10 - 2 should be equal to 8', () => {
    //Arrange
    const num1 = 10;
    const num2 = 2;
    const calculatorObj = new calculator();

    //Act
    const subtract = calculatorObj.subtract(num1,num2);

    //Assert
    expect(subtract).toBe(8);
  });

  test('Subtracting 10001 - 1 should be equal to 10000', () => {
    //Arrange
    const num1 = 10001;
    const num2 = 1;
    const calculatorObj = new calculator();

    //Act
    const subtract = calculatorObj.subtract(num1,num2);

    //Assert
    expect(subtract).toBe(10000);
  });
});

describe('Divide numbers', () => {
  test('numbers to be divided should be at least 2', () => {
    //Arrange
    const num = 6;
    const calculatorObj = new calculator();

    //Act
    const divide = calculatorObj.divide(num);

    //Assert
    expect(divide).toBe('invalid');
  });

  test('Dividing 10 by 2 should be equal to 5', () => {
    //Arrange
    const num1 = 10;
    const num2 = 2;
    const calculatorObj = new calculator();

    //Act
    const divide = calculatorObj.divide(num1,num2);

    //Assert
    expect(divide).toBe(5);
  });

  test('Dividing 253 by 5 should be equal to 50', () => {
    //Arrange
    const num1 = 253;
    const num2 = 5;
    const calculatorObj = new calculator();

    //Act
    const divide = calculatorObj.divide(num1,num2);

    //Assert
    expect(divide).toBe(50);
  });
});

describe('Multiply numbers', () => {
  test('numbers to be multiplied should be at least 2', () => {
    //Arrange
    const num = 6;
    const calculatorObj = new calculator();

    //Act
    const multiply = calculatorObj.multiply(num);

    //Assert
    expect(multiply).toBe('invalid');
  });

  test('Multiplying 10 by 2 should be equal to 20', () => {
    //Arrange
    const num1 = 10;
    const num2 = 2;
    const calculatorObj = new calculator();

    //Act
    const multiply = calculatorObj.multiply(num1,num2);

    //Assert
    expect(multiply).toBe(20);
  });

  test('Multiplying 5.4 by 2 should be equal to 10', () => {
    //Arrange
    const num1 = 5.4;
    const num2 = 2;
    const calculatorObj = new calculator();

    //Act
    const multiply = calculatorObj.multiply(num1,num2);

    //Assert
    expect(multiply).toBe(10);
  });
});

describe('Capitalize string', () => {
  test('Should be a string with the first letter capitalized', () => {
    //Arrange
    const name = 'jonas';
    const calculatorObj = new calculator();

    //Act
    const capitalize = calculatorObj.capitalize(name);

    //Assert
    expect(capitalize).toBe('Jonas');
  });

});