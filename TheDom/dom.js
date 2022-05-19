'use strict';

let mainDiv = document.querySelector("#addMe");

let newDiv = document.createElement("div"); //<div></div>
let newHeading = document.createElement("H1"); //<h1></h1>
let newFooter = document.createElement("Footer"); //
let newText = document.createTextNode("Big up Slowbro");

//APPEND CHILD

newHeading.appendChild(newText); // <h1> Big up Slowbro </h1>
newDiv.appendChild(newHeading); //<div><h1> Big up Slowbro </h1></div>

mainDiv.append(newDiv);