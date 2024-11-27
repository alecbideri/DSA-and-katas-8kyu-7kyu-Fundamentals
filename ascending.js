function inAscOrder(arr){
    let newArray = [...arr].sort((a,b) => a-b);
    
    for (var i = 0 ; i < arr.length ; i++){
        if (newArray[i] !== arr[i]){
            return false ;
        }
    }

    return true 
}

console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]));