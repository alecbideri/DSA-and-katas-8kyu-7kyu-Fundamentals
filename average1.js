function average(scores){
    let sum = 0 ;

    for(var i = 0 ; i < scores.length ; i++){
        sum+= scores[i];
    }

    return Math.ceil(sum  / scores.length) ;
}



// other methods 

function averages(score){
    let sum = score.reduce((accumulator , current)=> accumulator + current , 0);
    return Math.round(sum/score.length)
}

console.log(averages([49,3,5,300,7]));
