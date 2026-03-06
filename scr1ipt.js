const correctAnswer = "42"

function checkAnswer(){

let userAnswer = document.getElementById("answer").value

if(userAnswer == correctAnswer){
document.getElementById("result").innerText = "Correct! Puzzle solved."
}else{
document.getElementById("result").innerText = "Wrong answer. Try again."
}

}
