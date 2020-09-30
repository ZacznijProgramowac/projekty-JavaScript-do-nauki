const btnBackground = document.getElementById('btnBackground');
const container = document.getElementById('container');
const colors = ['gray', 'purple', 'black', 'teal', 'olive', 'maroon']

btnBackground.addEventListener('click', changeBackground);

function changeBackground() {
    const index = Math.random() * colors.length;
    const colorIndex = parseInt(index.toString());
    container.style.backgroundColor = colors[colorIndex];
}

// Your solution here

