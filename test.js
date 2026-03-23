const { fizzBuzz, getNumberSign, isLeapYear, classifyTriangle, calculateGrade } = require('./script');

// Тест для FizzBuzz
test('fizzBuzz(15) should contain Fizz, Buzz and FizzBuzz', () => 
  {
  const result = fizzBuzz(15);
  expect(result[2]).toBe("Fizz");     
  expect(result[4]).toBe("Buzz");     
  expect(result[14]).toBe("FizzBuzz");
});

// Тест для знаку числа
test('getNumberSign identifies positive, negative and zero', () => 
  {
  expect(getNumberSign(10)).toBe(1);
  expect(getNumberSign(-5)).toBe(-1);
  expect(getNumberSign(0)).toBe(0);
});

// Тест для високосного року
test('isLeapYear correctly identifies leap years', () => 
  {
  expect(isLeapYear(2000)).toBe(true);
  expect(isLeapYear(1900)).toBe(false);
});

// Тест для трикутників
test('classifyTriangle identifies types', () => 
  {
  expect(classifyTriangle(3, 3, 3)).toBe("equilateral");
  expect(classifyTriangle(1, 1, 10)).toBe("invalid");
});

// Тест для оцінок
test('calculateGrade calculates grades with modifiers', () => 
  {
  expect(calculateGrade(88)).toBe("B+");
  expect(calculateGrade(100)).toBe("A+");
  expect(calculateGrade(55)).toBe("F");
});