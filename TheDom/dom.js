'use strict';


// Global Scope
let btnCount = 0;
// Selectors
let mainDiv = document.querySelector("#addMe");
let secDiv = document.querySelector("#justChilling")
let thiDiv = document.querySelector("#archi")
let addBtn = document.querySelector("#addBtn");
let addBtn2 = document.querySelector("#addBtn2");


// Functions

let buttonCounter = () => {
    btnCount++
    mainDiv.innerHTML = "";
    let clickButText = document.createTextNode(btnCount);
    let newDiv = document.createElement("div");
    mainDiv.appendChild(clickButText);
    mainDiv.appendChild(newDiv);
    
    
}

let saveNumber = () => {
    let saveClick = document.createTextNode(btnCount);
    entry.setAttribute("class", "entries")
    let newBreak = document.createElement("br");
    secDiv.appendChild(newBreak);
    secDiv.appendChild(saveClick);
}
//TESTING A REACTION OFF CLICKS
// if (btnCount == 50){
//     let textAch = document.createTextNode("You're a master clicker!")
//     let newDiv2 = document.createElement("div");
//     thiDiv.appendChild(newDiv2);
//     newDiv2.appendChild(textAch);
// } else {
//     let textAch2 = document.createTextNode("Your skills are in adequate")
//     let newDiv3 = document.createElement("div");
//     thiDiv.appendChild(newDiv3);
//     newDiv3.appendChild(textAch2);
// }


// let newFooter = document.createElement("Footer"); //
// let clickButText = document.createTextNode("Big up Slowbro");


//APPEND CHILD
// newHeading.appendChild(newText); // <h1> Big up Slowbro </h1>
// newDiv.appendChild(newHeading); //<div><h1> Big up Slowbro </h1></div>
// mainDiv.append(newDiv);



addBtn.addEventListener("click", buttonCounter);
addBtn2.addEventListener("click", saveNumber);