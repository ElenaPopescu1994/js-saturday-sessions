/*CHALLENGE 2: Basic Arithmetic Operations
The user enters two numeric values. The program displays:

1.Their sum,
2.Their difference,
3.Their product,
4.Their division,
5.Their arithmetic mean,
6.The remainder of the division of the first number by the second,
7.The first number raised to the power of the second.*/

console.log("main.js is loaded...");

let valueOne = prompt('Enter one numeric value');
let valueTwo = prompt('Enter another numeric value');

valueOne = Number(valueOne);
valueTwo = Number(valueTwo);

alert(`The sum of ${valueOne} and ${valueTwo} is: ${valueOne+valueTwo}`);

alert(`The difference between ${valueOne} and ${valueTwo} is: ${valueOne-valueTwo}`);

alert(`The product of ${valueOne} and ${valueTwo} is: ${valueOne*valueTwo}`);

alert(`The division of ${valueOne} by ${valueTwo} is ${valueOne/valueTwo}`);

alert(`Their arithmetic mean is: ${(valueOne+valueTwo)/2}`);

alert(`The reminder of the division of the ${valueOne} by the ${valueTwo} is: ${valueOne%valueTwo}`);

alert(`The ${valueOne} raised to the power of ${valueTwo} is ${valueOne**valueTwo}`);
