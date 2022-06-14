function numberMultipleChecker(num, multiple1, multiple2){
    if(num % multiple1 === 0 && num % multiple2 === 0) return `${num} is a multiple of ${multiple1} and ${multiple2}`;
    else if(num % multiple1 === 0) return `${num} is a multiple of ${multiple1}`;
    else if(num % multiple2 === 0) return `${num} is a multiple of ${multiple2}`;
    else return `${num} is NOT a multiple of ${multiple1} and ${multiple2}`;
}

console.log(numberMultipleChecker(500, 5, 2));
console.log(numberMultipleChecker(500, 7, 2));
console.log(numberMultipleChecker(500, 3, 27));
console.log(numberMultipleChecker(500, 10, 4));
console.log(numberMultipleChecker(500, 10, 10));
console.log(numberMultipleChecker(500, 3, 6));
console.log(numberMultipleChecker(500, 2, 2));