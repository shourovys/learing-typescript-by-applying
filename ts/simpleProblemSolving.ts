// Find Fibonacci number by recursion
// by using helper requisition

const fibonacciHP = (num: number): number[] => {
  const fiboArray: number[] = [0, 1];

  const helper = (): void => {
    if (fiboArray.length === num) {
      return;
    }

    const currentFibo =
      fiboArray[fiboArray.length - 1] + fiboArray[fiboArray.length - 2];

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
function findLarge(str: string): string {
  let largest = "";
  let currentString = "";
  for (const cher of str) {
    if (cher === " ") {
      if (currentString.length > largest.length) {
        largest = currentString;
      }
      currentString = "";
    } else {
      currentString = currentString + cher;
    }
  }
  return largest;
}
// console.log(findLarge("hello how are you"));

//carate a animal counter
const animalCount = (mile: number): number => {
  let totalAnimal = 0;
  if (mile <= 10) totalAnimal += mile * 10;
  if (mile > 10 && mile <= 20) totalAnimal += (mile - 10) * 50;
  return totalAnimal;
};
// console.log(animalCount(12));

//find odd number form 1-10 and return a array of them by using recursion
const findOdd = (range: number): number[] => {
  if (range === 0) {
    return [];
  }
  const oddArr: number[] = [];
  if (range % 2 !== 0) {
    oddArr.push(range);
  }

  return oddArr.concat(findOdd(range - 1));
};
// console.log(findOdd(10));

//find fibonacci seres by recursion
const fibonacciN = (num: number): number => {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }
  return fibonacciN(num - 1) + fibonacciN(num - 2);
};
console.log(fibonacciN(6));
