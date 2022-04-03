const quizForm = document.querySelector(".quiz-form");
const submitAnswer = document.querySelector("#submit-answer");
const output = document.querySelector("#output")

const correctAnswers = ["90°", "right angles"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }
}

submitAnswer.addEventListener('click', calculateScore);