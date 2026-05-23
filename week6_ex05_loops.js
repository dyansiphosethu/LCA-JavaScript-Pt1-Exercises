//Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

//Create a For loop through the array of numbers to print each number in the array
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//While loop that counts down from 5 to 1
let number = 5;
while (number > 0) {
  console.log(number);
  number = number - 1;
}

//For loop that prints only even numbers
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

//Create a For Loop that calculates the sum of the numbers in an array
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log(sum);
