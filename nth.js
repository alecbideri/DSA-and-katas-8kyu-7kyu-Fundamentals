function nthSmallest(arr , pos){
    let newArray = arr.sort((a,b) => a-b ); 
    let min = newArray[pos - 1];
    
    return min;
}

console.log(nthSmallest([2,169,13,-5,0,-1] , 4))