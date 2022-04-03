const inputs = document.querySelectorAll(".input");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#output");

function calculateBasexHeight(b, h) {
    const bxh = b * h;
    return bxh;
}

function calculateArea() {
    const bxh = calculateBasexHeight(Number(inputs[0].value), Number(inputs[1].value));
    const area = 0.5 * bxh;
    output.innerText =  `The area of the triangle is ${area} cm²`;
}

areaBtn.addEventListener('click', calculateArea);