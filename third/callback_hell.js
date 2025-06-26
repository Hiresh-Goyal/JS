function getdata(id,getnextdata){
    setTimeout(() => {
        console.log("data id =",id);
        if(getnextdata)
            getnextdata();
    },2000)
}

getdata(1,() =>{
    getdata(2,() =>{
        getdata(3,() =>{
            getdata(4);
        })
    })
})