// spread operator
const sum = (x, y, z) => x+y+z;

const arr = [1, 2, 4];

console.log(sum(...arr));

var arr2 = [...arr, 6, 7];
console.log(arr2);

// rest operator - are used to get the argument of an array, and return a new array

const arr3 = ["hi", 1 , 2, "how", "are", "you", "?"];

// use of destructuring and rest
const [x, y, z, ...arr4] = arr3;

console.log(arr4);