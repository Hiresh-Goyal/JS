let idheading = document.getElementById("first-heading");
console.dir(idheading);

let classheading = document.getElementsByClassName("headings");
console.dir(classheading);

let tagpara = document.getElementsByTagName("p");
console.dir(tagpara);

// QUERY SELECTOR

let firstpara = document.querySelector("p");  //we can send all three types (class,id,tag) in it,returns the first instance of that
console.dir(firstpara);

let paraquery = document.querySelectorAll("p"); //returns all instances
console.dir(paraquery);

let classhead = document.querySelectorAll(".headings"); //class name is given with a .
console.dir(classhead);

let idhead = document.querySelector("#first-heading");  //id name is given with #
console.dir(idhead);

console.dir(document.body.firstChild);

let div = document.querySelector("div");
console.dir(div.innerText);
console.dir(div.innerHTML);
console.dir(div.textContent);