function evenNumbers(array , number){
    let newArray = [];
    let find = 0 ;
    let lastIndex = [];
    
    for(var i = 0 ; i < array.length ; i++){
        if(array[i] % 2 === 0){
            newArray.push(array[i]);
        }
     }
    
    lastIndex = newArray.slice(-number);

    return lastIndex;
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));