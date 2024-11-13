// This function fails under certain circumstances 

function twiceOld(dad , son){
    let count = 0 ;

    while (dad!== son*2){
        dad-- ;
        son-- ; 
        count ++ ;
    }

    return count;
}

// The function that works perfectly under a lot stress even lots of iteration made uncessary 

function TwiceOld(dad , son){
    return Math.abs(dad - 2*son);
}

console.log(TwiceOld(50 , 24));
console.log(twiceOld(50,24));