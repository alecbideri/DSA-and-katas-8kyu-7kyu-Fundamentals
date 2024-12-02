function adjacent(array){
    if(array.length < 2){
        return "Array needs to have more than one element";
    }

    let maxProduct = array[0] * array[1];
    
    for (var i = 1 ;  i < array.length - 1 ; i++){
        const product = array[i] * array[i+1];
        if(product > maxProduct){
            maxProduct = product ;
        }
    }

    return maxProduct ;
}

console.log(adjacent([5, 6, -4, 2, 3, 2, -23])) ;