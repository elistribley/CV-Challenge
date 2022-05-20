'use strict';

let inputOne = document.querySelector("#inputOne");
let inputTwo = document.querySelector("#inputTwo");
// let buttonOne = document.querySelector("#buttonOne");
let mainDiv = document.querySelector("#mainDiv");

let addBtn = document.querySelector("#addBtn")
let clearBtn = document.querySelector("#clearbtn")

// let cheekyFunc = () => {
//     let inputOneValue = inputOne.value;

//     let valueDiv = document.createElement("div")
//     let myValue = document.createTextNode(inputOneValue);
        
//     valueDiv.appendChild(myValue)
//     mainDiv.appendChild(valueDiv);
// }

// buttonOne.addEventListener("click", cheekyFunc)
// FOLLOWING ALONG WITH ANOUSH
let add = () => {
    let OneValue = parseInt(inputOne.value);
    let TwoValue = parseInt(inputTwo.value);

    let valueDiv = document.createElement("div");
    let myValue = document.createTextNode(`${valueOne} + ${valueTwo} = ${valueOne + valueTwo}`);
        
    valueDiv.appendChild(myValue)
    mainDiv.appendChild(valueDiv);

}

let clearResults = () => {
    
}


buttonOne.addEventListener("click", add)