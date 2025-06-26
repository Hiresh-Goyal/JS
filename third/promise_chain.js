function getdata(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data id =", id);
            resolve("success");
        }, 2000)
    }
    )
}

getdata(1).then((res) => {
    console.log(res);
    return getdata(2);
}).then((res) => {
    console.log(res);
    return getdata(3);
}).then((res) => {
    console.log(res);
})