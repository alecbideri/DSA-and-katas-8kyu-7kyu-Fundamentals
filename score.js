function scoreThrows(array){
    let score = 0 ; 

    if (array.length === 0){
        return 0 ;
    }

    if(array.every(radius => radius < 5)){
        score+= 100 ; 
    }

    for (let i = 0 ; i < array.length ; i++){
        if(array[i] > 10){
            score += 0 ;
        }else if (array[i] >= 5 && array[i] <= 10){
            score+= 5 ;
        }else if(array[i] < 5){
            score+= 10 ;
        }else {
            score += 0 ;
        }
    }

    return score ;
}

console.log(scoreThrows([1,5,11]));
