function checkEnding(num1, num2, num3) {
    //use tenary operator to return a boolean 
    return (num1 % 10 === num2 % 10 && num1 % 10 === num3 % 10 && num2 % 10 === num3 % 10) ? true:false; 
}
//Testing various numbers again different factors
console.log(checkEnding(20,30,40));
console.log(checkEnding(201,301,401));
console.log(checkEnding(202,30,401));
console.log(checkEnding(2032,32,3212));
console.log(checkEnding(205,305,455));
console.log(checkEnding(2023,303,3333));
console.log(checkEnding(2,2,2));
console.log(checkEnding(0,0,0));