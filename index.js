// DOM REFERENCES

const displayRight = document.querySelector(".score-box.right");
const displayWrong = document.querySelector(".score-box.wrong");
const rightSide = document.querySelector(".score-box.right").parentElement;
const wrongSide = document.querySelector(".score-box.wrong").parentElement;


// SCORE TRACKER

let scoreRight = 0;
let scoreWrong = 0;

function plusRight(n) {
    scoreRight += n;
    displayRight.textContent = scoreRight;
    highlightWinner();
}

function plusWrong(n) {
    scoreWrong += n;
    displayWrong.textContent = scoreWrong;
    highlightWinner();
}

function resetScores() {
    scoreRight = 0;
    scoreWrong = 0;
    displayRight.textContent = scoreRight;
    displayWrong.textContent = scoreWrong;
    highlightRemove();
}


// HIGHLIGHT WINNER

function highlightWinner() {
    highlightRemove();

    if (scoreRight == scoreWrong) {
        highlightRemove();
    } else if (scoreRight > scoreWrong) {
        rightSide.classList.add("winning");
    } else {
        wrongSide.classList.add("winning");
    }
}

function highlightRemove() {
    rightSide.classList.remove("winning");
    wrongSide.classList.remove("winning");
}