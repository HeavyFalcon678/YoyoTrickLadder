const trickList = document.getElementsByClassName("item-box");
let nextButton = document.getElementById("next");
let missButton = document.getElementById("miss");
const score = document.getElementById("score");
const trickListLength = trickList.length;
let trickPosition = 0;
let misses = 0;

nextButton.addEventListener("click", nextTrick);
missButton.addEventListener("click", missTrick);

console.log(trickList);
console.log(trickList.length);

for (let trick of trickList) {
    console.log(`Trick Name: ${trick}`);
    trick.classList.add("hidden");
}

trickList[trickPosition].classList.remove("hidden");

function nextTrick() {
    trickList[trickPosition].classList.add("hidden");
    trickPosition = trickPosition == trickListLength - 1 ? 0 : ++trickPosition;
    trickList[trickPosition].classList.remove("hidden");
}

function missTrick() {
    trickList[trickPosition].classList.add("hidden");
    trickPosition = trickPosition == trickListLength - 1 ? 0 : ++trickPosition;
    trickList[trickPosition].classList.remove("hidden");
    misses++;
    score.textContent = misses;
}
