// DOM REFERENCES

let displayRight = document.querySelector(".score-box.right");
let displayWrong = document.querySelector(".score-box.wrong");


// SCORE TRACKER

let scoreRight = 0;
let scoreWrong = 0;

function plusRight(n) {
    scoreRight += n;
    displayRight.textContent = scoreRight;
}

function plusWrong(n) {
    scoreWrong += n;
    displayWrong.textContent = scoreWrong;
}

function resetScores() {
    scoreRight = 0;
    scoreWrong = 0;
    displayRight.textContent = scoreRight;
    displayWrong.textContent = scoreWrong;
}