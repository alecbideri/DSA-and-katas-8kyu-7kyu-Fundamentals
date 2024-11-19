function factorial(n){
    
    if(n < 0 || !Number.isInteger(n) || n > 12){
       throw RangeError();
    }

    if(n===0){
        return 1 ;
    }

    let product =1 ;

    while (n>0){
        product *= n ;
        n--;
    }

    return product;
}

console.log(factorial(13));