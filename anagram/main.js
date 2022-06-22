// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. 
//For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. 
//You will be given two inputs a word and an array with words. 
//You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

// function anagrams(words) {
//     let wordArr = []
//     words.map( x => {
//         for(let i= 0; i< x.length; i++){
//             wordArr += wordArr.push([x[i]])
//         }
        
//     })
//     console.log(wordArr)
// }

function anagrams(words) {
    let wordArr = []
    words.map( x => {
       let result = x.match(/[a-z]/)
        
        console.log(result)
    })
}

anagrams(['crazer', 'carer', 'racar', 'caers', 'racer'])

const word = 'crazer';
let regex = /[a-z]/gi;
let result = regex.test(word);
let result2 = word.match(regex);
console.log(result)
console.log(result2)
