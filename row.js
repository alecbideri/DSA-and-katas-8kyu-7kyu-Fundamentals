function rowWeights(array){
let team1 = [];
let team2 = [];
let newArray = [];
let sum1 = 0 ;
let sum2 = 0 ;

if(array.length < 2){
    return newArray = [array[0] , 0];
}

for (var i = 0 ; i < array.length ; i++){
    if(i%2===0){
        team1.push(array[i]);
    }else{
        team2.push(array[i]);
    }
}

if (team2.length < 2){
    for (var j = 0 ; j < team1.length ; j++){
        sum1+= team1[j];
    }

    return newArray = [sum1 , ...team2];
}else{
    for (var j = 0 ; j < team1.length ; j++){
        sum1+= team1[j];
    }
    for (var j = 0 ; j < team2.length ; j++){
        sum2+= team2[j];
    }
     
    return newArray = [sum1 , sum2];
}


}

console.log(rowWeights([70,58,75,34,91]));