const puzzles = [

{question:"What is 6 x 7?", answer:"42"},
{question:"What is 9 + 10?", answer:"19"},
{question:"What is 5 x 5?", answer:"25"},
{question:"What is 15 - 7?", answer:"8"},
{question:"What is 12 / 3?", answer:"4"}

]

const today = new Date().getDate()

const puzzle = puzzles[today % puzzles.length]

document.getElementById("question").innerText = puzzle.question


let streak = localStorage.getItem("streak") || 0

document.getElementById("streak").innerText =
"Current streak: " + streak


function checkAnswer(){

let userAnswer =
document.getElementById("answer").value

if(userAnswer == puzzle.answer){

document.getElementById("result").innerText =
"Correct! Puzzle solved."

streak++

localStorage.setItem("streak",streak)

document.getElementById("streak").innerText =
"Current streak: " + streak


let solvedDays =
JSON.parse(localStorage.getItem("solvedDays")) || []

let today = new Date().getDate()

if(!solvedDays.includes(today)){

solvedDays.push(today)

localStorage.setItem(
"solvedDays",
JSON.stringify(solvedDays)
)

}

generateHeatmap()

}else{

document.getElementById("result").innerText =
"Wrong answer. Try again."

}

}



function generateHeatmap(){

const heatmap =
document.getElementById("heatmap")

heatmap.innerHTML = ""

let solvedDays =
JSON.parse(localStorage.getItem("solvedDays")) || []

for(let i=1;i<=30;i++){

let day = document.createElement("div")

day.classList.add("day")

if(solvedDays.includes(i)){

day.classList.add("solved")

}

heatmap.appendChild(day)

}

}

generateHeatmap()
