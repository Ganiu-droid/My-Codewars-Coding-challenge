//=========METHOD 1=====================
// function sumAll(arr) {
//     let allNumArr= []
//       sortedArr = arr.sort()
//     minNum = sortedArr[0];
//     maxNum = sortedArr[1]
//     for(let i = minNum; i<=maxNum; i++){
//       allNumArr.push(i)
  
      
//     }
//    console.log(allNumArr)
//     return allNumArr.reduce( (a,c) => a+c,0 );
//   }

//=============Method 2======================
  function sumAll(arr) {
    let total = 0 
    sortedArr = arr.sort()
    minNum = sortedArr[0]
    maxNum = sortedArr[1]

    // [minNum, maxNum] = [sortedArr]
    //console.log(sortedArr)
  
    for(let i = minNum; i<=maxNum; i++){
      total = total + i 
      // console.log(total)
    }

    return total;
  }
  
console.log(sumAll([1,4]))
