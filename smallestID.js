function nextID(ids){
    let max = Math.max(...ids);

    for (var i = 0 ; i < max ; i++){
        if(!ids.includes(i)){
            return i ;
        }
    } 

    return max + 1 ;
}

console.log(nextID([1,2,0,2,3,5]));