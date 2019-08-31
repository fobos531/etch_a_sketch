function getRandomColor() {
    let colors = ["navy", "blue", "aqua", "teal",
                "olive", "green", "lime", "yellow",
                "orange", "red", "maroon", "fuchsia",
                "purple", "black", "gray", "silver"];
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function applyRandomColor(e) {
    e.target.style.backgroundColor = getRandomColor();
}

const box = document.querySelector('#container div');

box.addEventListener('mouseover', applyRandomColor);