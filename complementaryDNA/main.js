/*
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
Your function receives one side of the DNA (string, except for Haskell); you need 
to return the other complementary side. DNA strand is never empty or there is no 
DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]



*/
function DNAStrand(dna){
    let dnaStrandComplement = [] //An empty array to store each complementary DNA
    for(i in dna){
        if(i.length === 0){
            return dna
        }
        else{
            if(dna[i] === 'A')
                dnaStrandComplement.push('T')       
            if(dna[i] === 'T')
                dnaStrandComplement.push('A')       
            if(dna[i] === 'C')
                dnaStrandComplement.push('G')       
            if(dna[i] === 'G')
                dnaStrandComplement.push('C')       
        }
    }
    return dnaStrandComplement.join('')
}



