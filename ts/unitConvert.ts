//1 feet == 12 inch
// convert inch To Feet
function inchToFeet(inch: number): number {
  return Number((inch / 12).toFixed(2));
}
const inchValue = inchToFeet(17);
console.log(inchValue);

// check Even or Odd
const checkEvenOrOdd = (num: number): string => {
  return num % 2 === 0 ? "Even" : "Odd";
};
console.log(checkEvenOrOdd(20));
console.log(checkEvenOrOdd(61));

//check is leap year or not
const isLeapYear = (year: number): boolean => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
};
console.log(isLeapYear(2020));
console.log(isLeapYear(2022));
console.log(isLeapYear(2012));

// Calculate Factorial of a number using for loop
const getFactorial = (num: number) => {
  if (num < 0) return "Sorry, factorial does not exist for negative numbers";
  else if (num === 0) return "The factorial of 0 is 1";

  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
};
console.log(getFactorial(-2));
console.log(getFactorial(0));
console.log(getFactorial(1));
console.log(getFactorial(5));

// Calculate Factorial in a Recursive function
const getFactorialByFun = (num: number): number => {
  if (num === 1) {
    return 1;
  }
  return num * getFactorialByFun(num - 1);
};
console.log(getFactorialByFun(5));

// Factorial using a while loop or a decrementing loop
const getFactorialByWhile = (num: number): number => {
  let i = 1;
  let fact = 1;
  while (i <= num) {
    fact = fact * i;
    i++;
  }
  return fact;
};
console.log(getFactorialByWhile(5));
