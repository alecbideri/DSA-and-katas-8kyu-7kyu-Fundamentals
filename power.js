function power(n){
    if(n<=1){
        return false ;
    }

    return true ? Math.log2(n) % 1 === 0  : false;
}

console.log(power(333));