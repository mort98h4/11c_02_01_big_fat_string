"use strict";

const inputValue = document.querySelector("#input").value = `morten gross`;
const outputValue = document.querySelector("#output");

window.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("start");

    document.querySelector("button").addEventListener("click", buttonClick);
}

function buttonClick() {
    console.log("buttonClick");

    const outputOption = document.querySelector("#outputOptions").value;

    if (outputOption === "0") {
        console.log(outputOption);
        outputValue.value = inputValue.substring(0,1).toUpperCase() + inputValue.substring(1);

    } else if (outputOption === "1") {
        console.log(outputOption);
        outputValue.value = inputValue.substring(0, inputValue.indexOf(" "))
        
    } else if (outputOption === "2") {
        console.log(outputOption);

    } else if (outputOption === "3") {
        console.log(outputOption);
        
    } else if (outputOption === "4") {
        console.log(outputOption);
        
    } else if (outputOption === "5") {
        console.log(outputOption);
        
    } else if (outputOption === "6") {
        console.log(outputOption);
        
    } else if (outputOption === "7") {
        console.log(outputOption);
        
    }

}