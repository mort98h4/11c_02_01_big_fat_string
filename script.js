"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("start");

    document.querySelector("button").addEventListener("click", buttonClick);
}

function buttonClick() {
    console.log("buttonClick");
    const input = document.querySelector("#input");
    const outputValue = document.querySelector("#output");
    let inputValue = input.value;

    const outputOption = document.querySelector("#outputOptions").value;

    if (outputOption === "0") {
        console.log(outputOption);
        outputValue.value = inputValue.substring(0,1).toUpperCase() + inputValue.substring(1);

    } else if (outputOption === "1") {
        console.log(outputOption);
        outputValue.value = inputValue.substring(0, inputValue.indexOf(" "));
        
    } else if (outputOption === "2") {
        console.log(outputOption);
        const firstName = inputValue.substring(0, inputValue.indexOf(" "));
        outputValue.value = firstName.length;

    } else if (outputOption === "3") {
        console.log(outputOption);
        const firstSpace = inputValue.indexOf(" ");
        const lastSpace = inputValue.lastIndexOf(" ");
        outputValue.value = inputValue.substring(firstSpace+1, lastSpace);
        
    } else if (outputOption === "4" && inputValue.endsWith(`.jpg`) || inputValue.endsWith(`.png`)) {
        console.log(outputOption);
        let fileType = inputValue.substring(inputValue.lastIndexOf("."));
        outputValue.value = `The file type is ${fileType}`;
        
    } else {
        outputValue.value = `This file type is not supported.`
    }
    if (outputOption === "5") {
        console.log(outputOption);
        
    } else if (outputOption === "6") {
        console.log(outputOption);
        
    } else if (outputOption === "7") {
        console.log(outputOption);
        
    }

}