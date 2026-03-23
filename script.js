

/**
 * 1 FizzBuzz Classic
 * @param {number} n
 * @returns {string[]}
 */
const fizzBuzz = (n) => 
  {
  const result = [];
  for (let i = 1; i <= n; i++) 
    {
    if (i % 3 == 0 && i % 5 == 0) 
      {
      result.push("FizzBuzz");
    } else if (i % 3 == 0) 
      {
      result.push("Fizz");
    } else if (i % 5 == 0) 
      {
      result.push("Buzz");
    } else 
      {
      result.push(i.toString());
    }
  }
  return result;
};

/**
 * 2 Number Sign
 * @param {number} num
 * @returns {number}
 */

const getNumberSign = (num) => 
{
  if (isNaN(num)) return NaN;
  if (num == 0) return 0;
  return num > 0 ? 1 : -1;
};

/**
 * 3 Leap Year Checker
 * @param {number} year
 * @returns {boolean}
 */
const isLeapYear = (year) => 
{
  return (year % 400 == 0) || (year % 4 == 0 && year % 100 !== 0);
};

/**
 * 4 Triangle Type Classifier
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {string}
 */
const classifyTriangle = (a, b, c) =>
{
  if (a + b <= c || a + c <= b || b + c <= a) 
  {
    return "invalid";
  }

  if (a == b && b == c) return "equilateral";
  if (a == b || b == c || a == c) return "isosceles";
  return "scalene";
};

/**
 * 5 Grade Letter Calculator
 * @param {number} score
 * @returns {string}
 */
const calculateGrade = (score) =>
{
  if (score < 0 || score > 100) return "invalid";
  if (score < 60) return "F";
  if (score == 100) return "A+";

  let letter = "";
  if (score >= 90) letter = "A";
  else if (score >= 80) letter = "B";
  else if (score >= 70) letter = "C";
  else letter = "D";

  const lastDigit = score % 10;
  if (lastDigit >= 7) return letter + "+";
  if (lastDigit <= 3) return letter + "-";
  return letter;
};

console.log("1 FizzBuzz:", fizzBuzz(10));
console.log("2 Sign", getNumberSign(-Infinity));
console.log("3 Leap Year:", isLeapYear(2000));
console.log("4 Triangle:", classifyTriangle(3, 3, 3));
console.log("5 Grade:", calculateGrade(88));



console.log("1 FizzBuzz:", fizzBuzz(50));
console.log("2 Sign", getNumberSign(Infinity));
console.log("3 Leap Year:", isLeapYear(1900));
console.log("4 Triangle:", classifyTriangle(1, 1, 10));
console.log("5 Grade:", calculateGrade(55));


console.log("1 FizzBuzz:", fizzBuzz(100));
console.log("2 Sign", getNumberSign(-0));
console.log("3 Leap Year:", isLeapYear(2500));
console.log("4 Triangle:", classifyTriangle(3, 4, 5));
console.log("5 Grade:", calculateGrade(72));

module.exports = { fizzBuzz, getNumberSign, isLeapYear, classifyTriangle, calculateGrade };