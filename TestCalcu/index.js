'use strict';

let display = document.querySelector(".content");
let buttons = document.querySelectorAll(".btn");
let operations = document.querySelectorAll(".btn-operation");
let clearAll = document.querySelector(".clear-all");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    display.value += e.target.value;
  });
});

operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    display.value += e.target.value;
  });
});

const resetCalculator = () => {
  display.value = "";
};
clearAll.addEventListener("click", resetCalculator);

const clearLastItem = () => {
  display.value = display.value.slice(0, -1);
};
clear.addEventListener("click", clearLastItem);

equal.addEventListener("click", function () {
  if (display.value === "") {
    display.value = "Please Enter a Value";
  } else {
    let result = eval(display.value);
    display.value = result;
  }
});