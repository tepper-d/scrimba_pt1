/*
CIS 124: Introduction to JavaScript
Scrimba Practice 1, Calculator
https://scrimba.com/playlist/p5vWxtd

Dominique Tepper, 06NOV2022
*/

"use strict";

/* GLOBAL CONSTANTS. Tepper, 06NOV2022*/
const $ = selector => document.querySelector(selector);
const today = new Date();
const op1Error = "The first number must be numeric";
const op2Error = "The second number must be numeric";

/* GLOBAL INITIALIZATION. Tepper, 06NOV2022*/
let op1ErrorMsgEl = document.getElementById("lblErrorMsg1-el");
let op2ErrorMsgEl = document.getElementById("lblErrorMsg2-el");
let errorMsg1 = "";
let errorMsg2 = "";


/* Exercise 6 - CALCULATOR CHALLENGE (DELUXE EDITION)
    User inputs 2 numbers and selects the operation.
Tepper, 06NOV2022 */

/* DATA VALIDATION. Tepper, 06NOV2022*/
const validate = () => {
    const operand1 = parseFloat($("#operand1").value);
    const operand2 = parseFloat($("#operand2").value);

    if(isNaN(operand1) && isNaN(operand2)) {
        op1ErrorMsgEl.textContent = op1Error;
        op2ErrorMsgEl.textContent = op2Error;
        $("#operand1").value = "";
        $("#operand2").value = "";
        $("#operand1").focus();
    }
    
    else if (isNaN(operand1)) {
        op1ErrorMsgEl.textContent = op1Error;
        $("#operand1").value = "";
        $("#operand1").focus();
        op2ErrorMsgEl.textContent = "";
        errorMsg1 += op1Error;
    }

    else if (isNaN(operand2)) {
        op2ErrorMsgEl.textContent = op2Error;
        $("#operand2").value = "";
        $("#operand2").focus();
        op1ErrorMsgEl.textContent = "";
        errorMsg2 += op2Error;
    }

    else if (errorMsg1 == "" && errorMsg2 == "") {
        num1 = operand1;
        num2 = operand2;
    }
}

// ADDITION FUNCTION. Tepper, 06NOV2022.
const add = () => {
    const operand1 = parseFloat($("#operand1").value);
    const operand2 = parseFloat($("#operand2").value);

    if(isNaN(operand1) && isNaN(operand2)) {
        op1ErrorMsgEl.textContent = op1Error;
        op2ErrorMsgEl.textContent = op2Error;
        $("#operand1").value = "";
        $("#operand2").value = "";
        $("#operand1").focus();
    }
    
    else if (isNaN(operand1)) {
        op1ErrorMsgEl.textContent = op1Error;
        $("#operand1").value = "";
        $("#operand1").focus();
        op2ErrorMsgEl.textContent = "";
        errorMsg1 += op1Error;
        return errorMsg1;
    }

    else if (isNaN(operand2)) {
        op2ErrorMsgEl.textContent = op2Error;
        $("#operand2").value = "";
        $("#operand2").focus();
        op1ErrorMsgEl.textContent = "";
        errorMsg2 += op2Error;
        return errorMsg2;
    }

    else if (errorMsg1 == "" && errorMsg2 == "") {
        let result = operand1 + operand2;
        $("#result").value = result.toFixed(2);
        op1ErrorMsgEl.textContent = "";
        op2ErrorMsgEl.textContent = "";
    }
}

// SUBTRACTION FUNCTION. Tepper, 06NOV2022.
const subtract = () => {
    const operand1 = parseFloat($("#operand1").value);
    const operand2 = parseFloat($("#operand2").value);

    if(isNaN(operand1) && isNaN(operand2)) {
        op1ErrorMsgEl.textContent = op1Error;
        op2ErrorMsgEl.textContent = op2Error;
        $("#operand1").value = "";
        $("#operand2").value = "";
        $("#operand1").focus();
    }
    
    else if (isNaN(operand1)) {
        op1ErrorMsgEl.textContent = op1Error;
        $("#operand1").value = "";
        $("#operand1").focus();
        op2ErrorMsgEl.textContent = "";
        errorMsg1 += op1Error;
        return errorMsg1;
    }

    else if (isNaN(operand2)) {
        op2ErrorMsgEl.textContent = op2Error;
        $("#operand2").value = "";
        $("#operand2").focus();
        op1ErrorMsgEl.textContent = "";
        errorMsg2 += op2Error;
        return errorMsg2;
    }

    else if (errorMsg1 == "" && errorMsg2 == "") {
        let result = operand1 - operand2;
        $("#result").value = result.toFixed(2);
        op1ErrorMsgEl.textContent = "";
        op2ErrorMsgEl.textContent = "";
    }
}

// MULTIPLICATION FUNCTION. Tepper, 06NOV2022.
const multiply = () => {
    const operand1 = parseFloat($("#operand1").value);
    const operand2 = parseFloat($("#operand2").value);

    if(isNaN(operand1) && isNaN(operand2)) {
        op1ErrorMsgEl.textContent = op1Error;
        op2ErrorMsgEl.textContent = op2Error;
        $("#operand1").value = "";
        $("#operand2").value = "";
        $("#operand1").focus();
    }
    
    else if (isNaN(operand1)) {
        op1ErrorMsgEl.textContent = op1Error;
        $("#operand1").value = "";
        $("#operand1").focus();
        op2ErrorMsgEl.textContent = "";
        errorMsg1 += op1Error;
        return errorMsg1;
    }

    else if (isNaN(operand2)) {
        op2ErrorMsgEl.textContent = op2Error;
        $("#operand2").value = "";
        $("#operand2").focus();
        op1ErrorMsgEl.textContent = "";
        errorMsg2 += op2Error;
        return errorMsg2;
    }

    else if (errorMsg1 == "" && errorMsg2 == "") {
        let result = operand1 * operand2;
        $("#result").value = result.toFixed(2);
        op1ErrorMsgEl.textContent = "";
        op2ErrorMsgEl.textContent = "";
    }
}

// DIVISION FUNCTION. Tepper, 06NOV2022.
const divide = () => {
    const operand1 = parseFloat($("#operand1").value);
    const operand2 = parseFloat($("#operand2").value);

    if(isNaN(operand1) && isNaN(operand2)) {
        op1ErrorMsgEl.textContent = op1Error;
        op2ErrorMsgEl.textContent = op2Error;
        $("#operand1").value = "";
        $("#operand2").value = "";
        $("#operand1").focus();
    }
    
    else if (isNaN(operand1)) {
        op1ErrorMsgEl.textContent = op1Error;
        $("#operand1").value = "";
        $("#operand1").focus();
        op2ErrorMsgEl.textContent = "";
        errorMsg1 += op1Error;
        return errorMsg1;
    }

    else if (isNaN(operand2)) {
        op2ErrorMsgEl.textContent = op2Error;
        $("#operand2").value = "";
        $("#operand2").focus();
        op1ErrorMsgEl.textContent = "";
        errorMsg2 += op2Error;
        return errorMsg2;
    }

    else if (errorMsg1 == "" && errorMsg2 == "") {
        let result = operand1 / operand2;
        $("#result").value = result.toFixed(2);
        op1ErrorMsgEl.textContent = "";
        op2ErrorMsgEl.textContent = "";
    }
}

// RESET FUNCTION. Tepper, 06NOV2022.
const reset = () => {
    $("#operand1").value = "";
    $("#operand2").value = "";
    $("#result").value = "";

    op1ErrorMsgEl.textContent = "";
    op2ErrorMsgEl.textContent = "";
    errorMsg1 = "";
    errorMsg2 = "";

    $("#operand1").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    $("#add").addEventListener("click", add);
    $("#subtract").addEventListener("click", subtract);
    $("#multiply").addEventListener("click", multiply);
    $("#divide").addEventListener("click", divide);
});


/* FOOTER. Tepper, 06NOV2022 *******************************************/
let footerEl = document.getElementById("footer-el");

function footer() {
    let studentName = "tepper-d, ";
    let whatisToday = today.toDateString() + ".";
    
    const footerStr = studentName + whatisToday;
    footerEl.textContent = footerStr;
}
footer();