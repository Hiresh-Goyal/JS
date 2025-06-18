let div = document.querySelector("div");
console.dir(div.innerText);    
console.dir(div.innerHTML);
console.dir(div.textContent);   //also gives the hidden text along with normal ones

let h2 = document.querySelector("h2");
console.dir(h2.getAttribute("id"));

h2.setAttribute("id","second-heading");
console.dir(h2.getAttribute("id"));

console.dir(div.style);
div.style.backgroundColor = "green";
div.style.color = "red";

let newbtn = document.createElement("button");
newbtn.innerText = "This is a button that needs clicking";
newbtn.style.height = "100px";
newbtn.style.width = "500px";
newbtn.style.fontSize = "xx-large"
div.append(newbtn);    //there is also prepend,before,after,remove