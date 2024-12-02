function freeDity(s){
 if(s.includes("tree fiddy") || s.includes("three fifty") || s.includes("3.50")){
    return true ;
 }else {
    return false ;
 }
}

console.log(freeDity("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."));