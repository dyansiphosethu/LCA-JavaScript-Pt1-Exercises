//Create an empty array
const colors = [];

//Populating the array
colors.push("Red");
colors.push("Blue");
colors.push("Yellow");

//Create an array of Numbers
const numbers = [12, 666, 777, 2, 4];

//Remove the last item
colors.pop();

//Add an element to the beginning of the array
colors.unshift("Green");

//Print the lengths of arrays to the console
console.log(
  `colors array has ${colors.length} items. numbers array has ${numbers.length} items`,
);
