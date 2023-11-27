// let can be reinitialized but const is defined once
/*
//let use
let x = "jack";
console.log(x);

x = "jill";
console.log(x);

// const use
const y = "jack";
console.log(y);

y = "jill";
console.log(y);

*/


// let is block scoped and var is function scoped
let x = "jill"
{
    let x = "jack";
    console.log(x);
}

console.log(x);

function myFunc(){
    var x = "jack";
    console.log(x);
}

myFunc();
console.log(x);