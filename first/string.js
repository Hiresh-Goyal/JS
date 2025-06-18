let str = "   Hiresh Goyal   Hiresh";
let nstr = " is a boy"
console.log(str.trim());   // removes whitespaces at start and end
console.log(str.toUpperCase());
console.log(str.slice(4,10));  //last index char is not included
console.log(str.concat(nstr));  //can also be done using + that is str + nstr
console.log(str.replace("Goyal","Kumar"));
console.log(str.replace("hirt","fhd")); //if the string to replace is not found noting is changed
console.log(str.replace("Hir","Gif"));  //only replaces teh first instance of the string
console.log(str.replaceAll("Hir","Gif")); ////replaces all instances of the string
console.log(str.charAt(5));  //Returns the character at index = 5