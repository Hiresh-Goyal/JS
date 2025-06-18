let divs = document.querySelectorAll("div");
let i =1;
for(div of divs)
{
    div.innerText = "Unique value "+i;
    i++;
}