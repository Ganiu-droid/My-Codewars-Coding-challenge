/*
Create a function that returns the sum of the two lowest positive 
numbers given an array of minimum 4 positive integers. No floats or 
non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

*/
function sumTwoSmallestNumbers(numbers) { 
  
    //Use the sort method to arrange the numbers in ascending order
      numbersSorted = numbers.sort( (a, b) => {return a - b} )
      return numbersSorted[0] + numbersSorted[1] // sum the first two numbers in the sorted array
  
    }



