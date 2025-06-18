let marks = [57,89,76,23,"Rahul"];
console.log(marks);
console.log(marks.length);
console.log(typeof(marks));  //Hence array is just an object

for(i of marks)
{
    console.log(i);    //if it were for in loop then we would need marks[i] instead of just i
}

marks.push(99,98,97,100);   //does at end while if u use unshift it adds at start
console.log(marks);

let deleted = marks.pop();  ////does at end while if u use shift, it removes from start
console.log(marks);
console.log(deleted);

let my = marks.toString();
console.log(my);


let heroes = ["ironman","thor","Hulk"];
let india = ["Delhi","Mumbai","Kolkata"];
let add = marks.concat(heroes,india);
console.log(add);

console.log(marks.slice(2,5));
marks.splice(2,2,"Hiresh","Harshi","Gaurav");   //Chanegs original array
console.log(marks);