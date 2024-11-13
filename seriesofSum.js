function SeriesSum(n){
    
    if(n===0){
        return "0.00";
    }

    let sum = 0 ;

    for (var i = 0 ; i < n ; i++){
        sum += 1 / (1+3*i);
    }

    return sum.toFixed(2);
}

console.log(SeriesSum(2));