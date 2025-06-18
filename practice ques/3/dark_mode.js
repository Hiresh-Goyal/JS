let btn = document.querySelector("button");
let body = document.querySelector("body");
let p = document.querySelector("p");
let curr = "light mode";

btn.addEventListener("click", () =>
        {
            if(curr == "light mode")
            {
                body.style.backgroundColor = "black";
                body.style.color = "white";
                btn.innerText = "To change the document to light mode, press this";
                p.innerText = "The document is in dark mode";
                curr = "dark mode";
            }

            else if(curr == "dark mode")
            {
                    body.style.backgroundColor = "white";
                    body.style.color = "black";
                    btn.innerText = "To change the document to dark mode, press this";
                    p.innerText = "The document is in light mode";
                    curr = "light mode";
            }
        })
