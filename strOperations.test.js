//const { default: test } = require('node:test');
const functionTests = require('./strOperations');

describe('String count', () => {
  test('string length should be 5', () => {
    //Arrange
    const str = 'hello';

    //Act
    const strLen = functionTests.stringLength(str);

    //Assert
    expect(strLen).toBe(5);
  });

  test('string length should not be less than 1 character', () => {
    //Arrange
    const str = 'hello';

    //Act
    const strLen = functionTests.stringLength(str);

    //Assert
    expect(strLen).not.toBeLessThan(1);
  });

  test('string length should not be more than 10 characters', () => {
    //Arrange
    const str = 'hello';

    //Act
    const strLen = functionTests.stringLength(str);

    //Assert
    expect(strLen).not.toBeGreaterThan(10);
  });
});

describe('Reverse string', () => {
  test('string should be reversed', () => {
    //Arrange
    const str = 'monday';

    //Act
    const reversed = functionTests.reverseString(str);

    //Assert
    expect(reversed).toBe('yadnom');
  });
});