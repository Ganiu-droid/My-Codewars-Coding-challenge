function my_levenshtein(s1, s2){
    count = 0;
    if(s1.length != s2.length){
        return -1
    }
    else if(s1.length == 0 && s2.length == 0){
        return 0
    }
    
    else{
        for(let i=0; i<s1.length; i++){
            let e = [s1[i], s2[i]]

            if (e[0] != e[1]){
                count++;
            }

        }
        return count;
    }

}

