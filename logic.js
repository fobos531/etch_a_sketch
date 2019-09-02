const container = document.getElementById("container");

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

//create 256 divs in a 16x16 grid
for (let i = 0; i < 256;i++) {
    if (i%16==0 && i != 0) {
        container.innerHTML += "<br>";
    }
    let newBox = document.createElement("div");
    container.appendChild(newBox);
}

let divs = Array.from(document.querySelectorAll('#container div'));
divs.forEach(box => box.addEventListener('mouseover', applyRandomColor));

function resetGrid() {
    container.innerHTML= "";
    let size = +(prompt("How many squares per side do you want? e.g. 20 for 20x20 grid"));
    //create a sizexsize sized grid
    if (!size) size = 16; //defualt to 16x16 if no size is provided
    for (let i = 0 && i != 0; i < size**2;i++) {
        if (i%size==0) {
            container.innerHTML += "<br>";
        }
    let newBox = document.createElement("div");
    container.appendChild(newBox);
    }
    //set all divs' color to white and adjust width and height to fit the container
    divs = Array.from(document.querySelectorAll('#container div'));
    divs.forEach(box => {
        box.style.backgroundColor = "white";
        box.style.width = (500/size).toString() + "px";
        box.style.height = (500/size).toString() + "px";
    });
    //apply event listeners to divs
    divs.forEach(box => box.addEventListener('mouseover', applyRandomColor));
}
