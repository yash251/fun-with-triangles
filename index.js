const inputs = document.querySelectorAll(".angle-input");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180) {
        output.innerText = "Great! The angles form a triangle!";
    }
    else {
        output.innerText = "Uh Oh! The angles do not form a triangle!"
    }
}

checkButton.addEventListener('click', isTriangle)