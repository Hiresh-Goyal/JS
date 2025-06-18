let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

let body = document.querySelector("body");
body.prepend(newBtn);

let para = document.querySelector("p");
// let classp = para.getAttribute("class");
// para.setAttribute("class",classp+" newClass")

// THE ABOVE 2 LINES CAN REPLACED BY JUST THIS LINE
para.classList.add("newClass");