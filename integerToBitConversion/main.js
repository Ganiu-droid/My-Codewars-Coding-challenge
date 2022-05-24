//Convert Integer to Binary and then to bit
function intToBit(num){
    //convert integer to binary
    let binary = Number(num).toString(2)
    let bitArr = []
    let count = 0
    for(i in binary){ //loop through all the binary number

            (binary[i] == '1') ? count += 1 : count = count //when the binary has more than one digit
    }
   // console.log(binary)
    return count
}



