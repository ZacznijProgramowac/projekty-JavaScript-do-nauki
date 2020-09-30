const btnBackground = document.getElementById('btnBackground');
const container = document.getElementById('container');
const colors = ['gray', 'purple', 'black', 'teal', 'olive', 'maroon']

btnBackground.addEventListener('click', changeBackground);

function changeBackground() {
    const index = generateRandomNumber(colors.length);
    container.style.backgroundColor = colors[index];
}

// Solution
const btnSize = document.getElementById('btnSize');
const square = document.getElementById('square');
btnSize.addEventListener('click', changeSquare);

function changeSquare() {
    const index = generateRandomNumber(colors.length);
    square.style.backgroundColor = colors[index];

    const size = generateRandomNumber(500);
    square.style.width = `${size}px`
    square.style.height = `${size}px`
}

function generateRandomNumber(maxNumber) {
    const random = Math.random() * maxNumber;
    return parseInt(random.toString());
}
