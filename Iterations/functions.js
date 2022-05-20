'use strict';
// Functions
function myFunc(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
function myFuncReturn(num1, num2, num3) {
    return (num1 + num2 + num3);
}

let result = myFuncReturn(7, 9, 11);
console.log(result);

let myfunctionExp = function(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
myFunc(2, 5, 1)
myFuncReturn(4, 5, 6)

// Functions

function subCalc(num1, num2) {
    return num1 - num2;
}

console.log(subCalc(5,20));
// Function Expressions
let str1 = function(name,age,gender){
    console.log(`My name is ${name}, i am ${age} years old and I am ${gender}`);
    }
   
    str1("Eli Stribley", 24, "Male");
