function missing(array){
    const fullSeries = [0,1,2,3,4,5,6,7,8,9];   

    for(var i = 0 ; i < fullSeries.length ; i++){
        if(!array.includes(fullSeries[i])){
            return i ;
        }
    }
}

console.log(missing([9, 2, 4, 5, 7, 0, 8, 6, 1]));
