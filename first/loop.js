// there are for,while,do-while , for-of,for-in loop

// FOR OF Loop  --- gives the value like H,i,r,e,s,h   --- used for strings,arrays

let str = "Hiresh Goyal";
for(let i of str)
{
    console.log(i);
}


// FOR IN Loop  --- gives keys of an object  ---used for objects

let student ={ 
    name : "Harshi",
    score:89,
    ispass : true
};

for(let i in student)
{
    console.log(i , " : " , student[i]);
}


console.log(str.length);


// TEMPLATE LITERALS

let output = `The student whose name is ${student.name} has scored a total of ${student.score}/100 marks`;

console.log("The student whose name is ",student.name," has scored a total of ", student.score, " /100 marks")

console.log(output);

//Both of the above statements give the same output    