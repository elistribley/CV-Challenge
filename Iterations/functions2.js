'use strict';

let user = {
    name1: "Bob",
    years: 25,
    hobby: "Fishing" 
};
let {name1, years, hobby, isAdmin = false} = user;
console.log(name1);
console.log(years);
console.log(hobby);
console.log(isAdmin);

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

let boyAverage = average(getBoy(grades));
let girlAverage = average(getGirl(grades));
let highestGrade = maxGrade(grades);
let lowestGrade = minGrade(grades);
let highestBoyGrade = maxGrade(getBoy(grades));
let lowestBoyGrade = minGrade(getBoy(grades));
let highestGirlGrade = maxGrade(getGirl(grades));
let lowestGirlGrade = minGrade(getGirl(grades));
let classRoomAverage = average(grades);
// CALLING FUNCTIONS
// console.log(grades)
console.log(classRoomAverage)
console.log(girlAverage)
console.log()


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

