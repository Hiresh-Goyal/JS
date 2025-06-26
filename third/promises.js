let promise = new Promise ((resolve,reject) =>{
    setTimeout(() => {
        console.log("data id = 1234");
        let abc = 10 *Math.random();
        console.log("abc =",abc);
        if(abc > 5)
            resolve("abc is > 5");
        else
            reject("abc is < 5");
        console.log(promise);
    },1000);
})

promise.then((res) => {
    console.log("promise has been fullfilled",res)
})

promise.catch((err) => {
    console.log("promise has not been fullfilled",err)
})