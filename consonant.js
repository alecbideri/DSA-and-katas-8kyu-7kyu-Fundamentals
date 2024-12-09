function consonant(str){
   let consonant = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
   let  consonantCount = 0 ;  

   for (var i = 0 ; i < str.length ; i++){
    if(consonant.includes(str[i])){
        consonantCount ++ ;
    }

   }

   return consonantCount ;
}

console.log(consonant("bcdfghjklmnpqrstvwxyz"));

// another solution 

function consonaNt(str){
    let consonantsRegex = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g ;
    let consonants = str.match(consonantsRegex);
    return consonants ? consonants.length : 0 

}
