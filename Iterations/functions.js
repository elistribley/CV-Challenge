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
// ARROW FUNCTIONS
let powerUp = (n1, n2) => Math.pow(n1, n2);
    console.log(powerUp(2, 5));

// HIGHER FUNCTIONS
// ARRAY
let grades = [
    {name: 'Bill', grade: 3, sex: 'M'},
    {name: 'Jane', grade: 6, sex: 'F'},
    {name: 'Joe', grade: 8, sex: 'M'},
    {name: 'Benjamin', grade: 7, sex: 'M'},
    {name: 'Yuki', grade: 15, sex: 'M'},
    {name: 'Ash', grade: 16, sex: 'M'},
    {name: 'Ketchum', grade: 15, sex: 'M'},
    {name: 'Misty', grade: 16, sex: 'F'},
    {name: 'Brock', grade: 17, sex: 'M'},
    {name: 'Oak', grade: 20, sex: 'M'}
]
// ARROW FUNCTION
let isBoy = student => student.sex === "M";
let isGirl = student => student.sex === "F";
let getBoy = grades => (grades.filter(isBoy));
let getGirl = grades => (grades.filter(isGirl));
// MAP TOO
let average = grades => (grades.reduce((acc,curr) => (acc + curr.grade), 0) / grades.length);
let maxGrade = grades => (Math.max(grades.map(student => student.grade)));
let minGrade = grades => (Math.min(grades.map(student => student.grade)));
// DECLARING VARIBLES
let classRoomAverage = average(grades);
let boysAverage = average(getBoy(grades));
let girlsAverage = average(getGirl(grades));
let highestGrade = maxGrade(grades);
let lowestGrade = minGrade(grades);
let highestBoyGrade = maxGrade(getBoy(grades));
let lowestBoyGrade = minGrade(getBoy(grades));
let highestGirlGrade = maxGrade(getGirl(grades));
let lowestGirlGrade = minGrade(getGirl(grades));
// CALLING FUNCTIONS
console.log(grades)
console.log(classRoomAverage)
console.log(lowestGrade)
console.log(highestGrade)


const myStudentArray = ['Bill', 'Jane', 'Benjamin', 'Ash', 'Ketchum', 'Misty', 'Brock', 'Oak'];
const [a,,, b,, c, ...theRest] = myStudentArray;
console.log(a)
console.log(b)
console.log(c)
console.log(theRest)
console.log(myStudentArray)


// for (let i = grades; i > grades.length; i++){
//     for (let b = grades; b <=10; b++){
//         console.log(i)
//     }
    
// }
// console.log(grades)