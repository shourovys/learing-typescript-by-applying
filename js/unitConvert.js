"use strict";
//1 feet == 12 inch
// convert inch To Feet
function inchToFeet(inch) {
    return Number((inch / 12).toFixed(2));
}
var inchValue = inchToFeet(17);
console.log(inchValue);
// check Even or Odd
var checkEvenOrOdd = function (num) {
    return num % 2 === 0 ? "Even" : "Odd";
};
console.log(checkEvenOrOdd(20));
console.log(checkEvenOrOdd(61));
//check is leap year or not
var isLeapYear = function (year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
};
console.log(isLeapYear(2020));
console.log(isLeapYear(2022));
console.log(isLeapYear(2012));
// Calculate Factorial of a number using for loop
var getFactorial = function (num) {
    if (num < 0)
        return "Sorry, factorial does not exist for negative numbers";
    else if (num === 0)
        return "The factorial of 0 is 1";
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
};
console.log(getFactorial(-2));
console.log(getFactorial(0));
console.log(getFactorial(1));
console.log(getFactorial(5));
// Calculate Factorial in a Recursive function
var getFactorialByFun = function (num) {
    if (num === 1) {
        return 1;
    }
    return num * getFactorialByFun(num - 1);
};
console.log(getFactorialByFun(5));
// Factorial using a while loop or a decrementing loop
var getFactorialByWhile = function (num) {
    var i = 1;
    var fact = 1;
    while (i <= num) {
        fact = fact * i;
        i++;
    }
    return fact;
};
console.log(getFactorialByWhile(5));
