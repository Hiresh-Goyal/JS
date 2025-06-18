let btn1 = document.querySelector("#button_1");

let click = (i,j) =>
    {
        console.log(i, " button was clicked");
        console.log("This is the ", j , " handler");
    };

let clickbtn2 = () => click("second","second");


btn1.onclick = () => click("first");  //like this if there are multiple of same then only the last one will actiavte
btn1.ondblclick = (e) =>
    {
        console.log("Button was clicked 2x times");
        console.log(e);
        console.log(e.type,e.target);
        console.log(e.clientX,e.clientY);
    };

let div = document.querySelector("div");
div.onmouseover = () =>
    {
        // alert("Take the mouse off the div");
        console.log("Take the mouse off the div");
    }   

let btn2 = document.querySelector("#button_2");
btn2.addEventListener("click",() => click("second","first"));  //with this if there are multiple for same event then all will activate
btn2.addEventListener("click", clickbtn2);
btn2.addEventListener("click",() => click("second","third"));

btn2.removeEventListener("click",clickbtn2);