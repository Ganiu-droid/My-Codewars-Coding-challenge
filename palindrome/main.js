

function isPalindrome(str){
    let strReverse = str.split('').reverse().join('')
    if(str === strReverse)
    return true
    else
    return false
}

console.log(isPalindrome('12321'))