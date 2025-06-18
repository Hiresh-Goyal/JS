function add(a,b)
{
    return(a+b);
}

console.log(`The sum of 5 and 6 using normal func add is ${add(5,6)}`);

const arrowadd = (a,b) =>{
    return(a+b);
}

console.log(`The sum of 5 and 6 using arrowadd is ${arrowadd(5,6)}`);

let arr = [0,5,10,15,20];

function print(val){
    console.log("Hi, the value is ",val);
}
arr.forEach(print);

let sum =0;
function addarr(val,idx)
{
    sum+= val;
    console.log("The sum after adding ",val," which was at index ",idx," is = ",sum);
}

arr.forEach(addarr);
console.log("Hence, the sum of all elements of array is ",sum);


//FOR EACH DOES NOT RETURN A NEW ARRAY WHEREAS MAP RETURNS A NEW ARRAY

let sqarr = arr.map(function square(val){
    return val**2;
})

console.log(sqarr);

// FILTER

let filterarr = arr.filter(even = (val) =>{
    return val%2===0;      //The condition which is when true then the element is added to the new array
})

console.log(filterarr);


// REDUCE - reduces the array to give a single value

let output = arr.reduce((result,val) => {     //GIVES sum of all no. of array
    return(result + val);
})

console.log(output/5);  //prints the avg of all no.s in array