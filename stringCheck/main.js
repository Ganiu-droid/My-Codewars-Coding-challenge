/*
Create a function that takes a string and create a new string
with first 3 characters in lower case and the rest in Upper case.
If the string is less than 3 it should return the string all in uppercase.


*/

function createStr(str) {
    if(str.length < 3) return str.toUpperCase();
        
    else{
        let front_part = str.substring(0,3).toLowerCase();
        let back_part = str.substring(3,str.length-1).toUpperCase();
        
        return `${front_part}${back_part}`;
    }

}

console.log(createStr('newjavaScript'));
console.log(createStr('graph'));
console.log(createStr('ap'));
console.log(createStr('g'));
console.log(createStr('lkfra'));
console.log(createStr('fra54wrwswe6twer'));
console.log(createStr('3dfewwaetrewswe6twer'));