// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
//The first word within the output should be capitalized only if the original word was capitalized 
//(known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    //let strArr = str.toUpperCase().split('').join('-')
    
    let strArr
    if(/_/.test(str)){
        strArr = str.split('_')         

    } else if(/-/.test(str)){
        strArr = str.split('-') 
    }
    strArr.forEach( x => {
        x.slice(0,1).toUpperCase() + x.slice(1, x.length)
    })
     console.log(strArr)
    // let eachStrWordInArr = strArr.map( x =>{ 
    //     console.log(x[0].toUpperCase())
    // } )
    //     firstWord =  eachStrWordInArr.shift()
    //     console.log(firstWord)
    }
    
    toCamelCase('hello-nigeria-limited')