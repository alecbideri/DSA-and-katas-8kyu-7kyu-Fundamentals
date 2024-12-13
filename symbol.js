function secondSymbol(string , s){
    let count = 0 ; 

    for(let i = 0 ; i < string.length ; i++){
        if(string[i] === s){
            count ++;

            if(count === 2){
                return i ;
            }
        }
    }

    return -1 ;
}

console.log(secondSymbol("Hello world!!!" , 'o'));
