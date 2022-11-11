/*
CIS 124: Introduction to JavaScript
Scrimba Practice 1
https://scrimba.com/playlist/p5vWxtd

Dominique Tepper, 06NOV2022
*/

"use strict";

const $ = selector => document.querySelector(selector);

const today = new Date();
const logString = "This is the console log for Exercise ";
const pageString = "This is the page output for Exercise ";

/* Exercise 1 - VARIABLES PRACTICE. 
        a. Create 2 vars, firstName and lastName
        b. CONCAT vars using 3rd var, fullName
        c. Log fullName to console
Tepper, 06NOV2022 */

let e1HeadEl = document.getElementById("e1head-el"); // Exer 1 header
let e1BodyEl = document.getElementById("e1body-el"); // Exer 1 output

const txtFullName = () => {

    let firstName = "Snoopy";
    let lastName = "Bestest Boy"
    
    const fullName = firstName + " " + lastName;
    console.log(logString + "1: \n" + fullName);
    
    let txtEx1a = (`${pageString} 1: `);
    e1HeadEl.textContent = txtEx1a;

    let txtEx1b = (`${fullName}`);
    e1BodyEl.textContent = txtEx1b;
    
}

/* Exercise 2 - CONCATENATE 2 STRINGS IN A FUNCTION. 
    Create a function that logs "Hi there, Linda!" when called
Tepper, 06NOV2022 */

let e2HeadEl = document.getElementById("e2head-el"); // Exer 2 header
let e2BodyEl = document.getElementById("e2body-el"); // Exer 2 output

const greetLinda = () => {
    let name = "Linda";
    let greeting = "Hi there";

    const hej = greeting + ", " + name + "!";
    console.log(logString + "2: \n" + hej);

    let txtEx2a = (`${pageString} 2: `);
    e2HeadEl.textContent = txtEx2a;

    let txtEx2b = (`${hej}`);
    e2BodyEl.textContent = txtEx2b;
}


/* Exercise 3 - INCREMENTING & DECREMENTING (DELUXE EDITION).
    A looping function that receives user input as userPoints, adds 3pt or subtracts 1pt, so the output will always be 10. Only the final output will be in a card but all attempts will write below the footer. 
        a. Create fxns add3Pts() & minus1Pt()
        b. Create var myPoints that will be adjusted from user input
        c. Log == 10
Tepper, 06NOV2022 */

const pointsCalc = () => {
    let userPoints = 0;
    let again = "y";

    let e3HeadEl = document.getElementById("e3head-el"); // Exer 3 header
    let e3BodyEl = document.getElementById("e3body-el"); // Exer 3 output

    do {
        // user input validation loop. Tepper, 06NOV2022.
        do {
            // userPoints stores raw input
            userPoints = parseInt(prompt("Enter a number between 0 and 25."));
        }
        while (isNaN(userPoints) || userPoints < 0 || userPoints > 25);

        let myPoints = userPoints;

        // +3 fxn. Tepper, 06NOV2022.
        const add3Pts = () => {
            do {
            myPoints += 3;
            console.log("User input:" + userPoints);
            console.log("add3Pts: " + myPoints);
            } while (myPoints < 10);
        }

        // -1 fxn. Tepper, 06NOV2022.
        const minus1Pt = () => {
            do {
            myPoints --;
            console.log("User input:" + userPoints);
            console.log("minus1Pt: " + myPoints);
            }
            while (myPoints > 10);
        }

        if(myPoints == 10) {
            console.log("Tens! Tens! Tens across the board!")
        }

        // interative increments or decrements as long as myPoints != 10. Tepper, 06NOV2022.
        while (myPoints != 10) {
            
            if(myPoints < 10) {
                add3Pts();
                console.log("if mp<10 => +3 :" + myPoints);

                if(myPoints > 10) {
                    minus1Pt();
                    console.log("if mp<10 => +3, sum overshoot:" + myPoints);
                }
            }
            
            else if(myPoints > 10) {
                minus1Pt();
                console.log("if mp>10 => mp--:" + myPoints);

                if(myPoints < 10) {
                    add3Pts();
                    console.log("if mp>10 => mp--, sum undershoot:" + myPoints);
                }
            }    
        }

        console.log("User input was " + userPoints + " but it's just a " + myPoints + " in the end.");

        let txtEx3a = (`${pageString} 3: `);
        e3HeadEl.textContent = txtEx3a;
    
        let txtEx3b = (`The user entered ${userPoints} but it had to be adjusted to ${myPoints}.`);
        e3BodyEl.textContent = txtEx3b;

        document.write(`<p><b>${pageString} 3:</b><br>The user entered ${userPoints} but it's been adjusted to a ${myPoints}.`);

        again = prompt("Do you want to enter another number? (Y / N)", "y");
    }
    while (again == "y");
}

/* Exercise 4 - STRINGS AND NUMBERS. Tepper, 06NOV2022 */
const strNums = () => {
    console.log(logString + "4:");
    console.log("2" + 2) // "22" 
    console.log(11 + 7) //  18
    console.log(6 + "5") // "65"
    console.log("My points: " + 5 + 9) // "My points: 59"
    console.log(2 + 2) // 4
    console.log("11" + "14") //  "1114"
}

/* Exercise 5 - RENDERING AN ERROR MESSAGE. 
    When the user clicks the purchase button, errorMsg "Something went wrong, please try again" in the paragraph that has the id="error".
Tepper, 06NOV2022 */

let errorMsg = document.getElementById("error");
console.log(errorMsg);

const buyClick = () => {
    console.log("Purchase button click detected");
    errorMsg.textContent = "Something went wrong, please try again";
}

/* FOOTER. Tepper, 06NOV2022 *******************************************/
let footerEl = document.getElementById("footer-el");

function footer() {
    let studentName = "tepper-d, ";
    let whatisToday = today.toDateString() + ".";
    
    const footerStr = studentName + whatisToday;
    footerEl.textContent = footerStr;
}

/* FUNCTION CALLS. Tepper, 06NOV2022 *******************************************/

txtFullName(); // Exercise 1 - VARIABLES PRACTICE. 

greetLinda(); // Exercise 2 - CONCATENATE 2 STRINGS IN A FUNCTION. 

pointsCalc(); // Exercise 3 - INCREMENTING & DECREMENTING (DELUXE EDITION).

strNums(); // Exercise 4 - STRINGS AND NUMBERS. Tepper, 06NOV2022 */

footer(); // Page Footer
