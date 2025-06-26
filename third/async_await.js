function getdata(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data id =", id);
            resolve("success");
        }, 2000);
    }
    );
}

(async function () {
    await getdata(1);
    await getdata(2);
    await getdata(3);            //(func)() - this automatically calls the func as soon as it is defined
})();                            //Can only be used once