const puzzles = [
{question:"What is 6 x 7?", answer:"42"},
{question:"What is 9 + 10?", answer:"19"},
{question:"What is 5 x 5?", answer:"25"}
]

const today = new Date().getDate()

const puzzle = puzzles[today % puzzles.length]

document.querySelector("p").innerText = puzzle.question

function checkAnswer(){

let userAnswer = document.getElementById("answer").value

if(userAnswer == puzzle.answer){
document.getElementById("result").innerText = "Correct! Puzzle solved."
}else{
document.getElementById("result").innerText = "Wrong answer. Try again."
}

}
