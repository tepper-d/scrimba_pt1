/*CIS 124: Introduction to JavaScript
Scrimba Practice 1, Solo Project
https://scrimba.com/playlist/p5vWxtd

    GAME CLICKER COUNTER
        Adds points (3, 2, or 1) to home or away team scores when their respective score buttons are clicked.
Dominique Tepper, 06NOV2022 */

"use strict";

// CONSTANTS. Tepper, 10NOV2022.
const today = new Date();

// GLOBAL VARIABLES. Tepper, 10NOV2022.
let homeEl = document.getElementById("home-el");
let awayEl = document.getElementById("away-el");

let homeScore = 0;
let awayScore = 0;

// SCORE PRINT. Tepper, 10NOV2022.
const homePrint = () => {
    homeEl.textContent = homeScore;
}

const awayPrint = () => {
    awayEl.textContent = awayScore;
}


// SCORE MANIPULATORS. Tepper, 10NOV2022.
const homeAdd1 = () => {
    homeScore++;
    homePrint();
}

const homeAdd2 = () => {
    homeScore += 2;
    homePrint();
}

const homeAdd3 = () => {
    homeScore += 3;
    homePrint();
}

const awayAdd1 = () => {
    awayScore++;
    awayPrint();
}

const awayAdd2 = () => {
    awayScore += 2;
    awayPrint();
}

const awayAdd3 = () => {
    awayScore += 3;
    awayPrint();
}

const load = () => {
    homeEl.textContent = homeScore;
    awayEl.textContent = awayScore;
}
load();


// RESET SCOREBOARD. Tepper, 10NOV2022.
const reset = () => {
    homeScore = 0;
    awayScore = 0;

    homeEl.textContent = homeScore;
    awayEl.textContent = awayScore;
}

/* FOOTER. Tepper, 06NOV2022 *******************************************/
let footerEl = document.getElementById("footer-el");

function footer() {
    let studentName = "tepper-d, ";
    let whatisToday = today.toDateString() + ".";
    
    const footerStr = studentName + whatisToday;
    footerEl.textContent = footerStr;
}
footer();