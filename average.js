function averages(numbers){
    if(numbers.length === 1 || !numbers.length ){
        return [];
    }

    let newArray = [];

    for(var i = 0 ; i < numbers.length - 1 ; i++){
        newArray.push((numbers[i]+ numbers[i+1]) / 2);
    }

    return newArray ; 
}

console.log(averages([]));
