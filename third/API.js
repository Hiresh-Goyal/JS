const url = "https://dogapi.dog/api/v2/breeds";
let button = document.querySelector("#dog");
let desc1 = document.querySelector("#desc1");
let desc2 = document.querySelector("#desc2");
let i =0;

const getfacts = async () => {
    if(i==10)
        i=0;
    let response = await fetch(url);
    console.log(response);
    jsonData = await response.json();
    desc1.innerText = jsonData.data[i].attributes.name;
    desc2.innerText = jsonData.data[i].attributes.description;
    i++;
}

button.addEventListener("click",getfacts);