const quizForm = document.querySelector(".quiz-form");
const submitAnswer = document.querySelector("#submit-answer");
const output = document.querySelector("#output")

const correctAnswers = ["90°", "right angles"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let entry of formResults.entries()) {
        
    }
}

submitAnswer.addEventListener('click', calculateScore);