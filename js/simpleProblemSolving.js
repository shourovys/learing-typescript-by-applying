"use strict";
// Find Fibonacci number by recursion
// by using helper requisition
var fibonacciHP = function (num) {
    var fiboArray = [0, 1];
    var helper = function () {
        if (fiboArray.length === num) {
            return;
        }
        var currentFibo = fiboArray[fiboArray.length - 1] + fiboArray[fiboArray.length - 2];
        fiboArray.push(currentFibo);
        helper();
    };
    helper();
    return fiboArray;
};
// console.log(fibonacciHP(10));
// const fibonacci = (num: number): number => {
//   if (num === 1) {
//     return 0;
//   }
//   fibonacci
// };
// console.log(fibonacci(6));
// find largest part of string
function findLarge(str) {
    var largest = "";
    var currentString = "";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var cher = str_1[_i];
        if (cher === " ") {
            if (currentString.length > largest.length) {
                largest = currentString;
            }
            currentString = "";
        }
        else {
            currentString = currentString + cher;
        }
    }
    return largest;
}
// console.log(findLarge("hello how are you"));
//carate a animal counter
var animalCount = function (mile) {
    var totalAnimal = 0;
    if (mile <= 10)
        totalAnimal += mile * 10;
    if (mile > 10 && mile <= 20)
        totalAnimal += (mile - 10) * 50;
    return totalAnimal;
};
// console.log(animalCount(12));
//find odd number form 1-10 and return a array of them by using recursion
var findOdd = function (range) {
    if (range === 0) {
        return [];
    }
    var oddArr = [];
    if (range % 2 !== 0) {
        oddArr.push(range);
    }
    return oddArr.concat(findOdd(range - 1));
};
// console.log(findOdd(10));
//find fibonacci seres by recursion
var fibonacciN = function (num) {
    if (num === 0) {
        return 0;
    }
    else if (num === 1) {
        return 1;
    }
    return fibonacciN(num - 1) + fibonacciN(num - 2);
};
console.log(fibonacciN(6));
