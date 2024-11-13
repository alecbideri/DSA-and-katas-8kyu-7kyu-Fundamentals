function between(a ,b){
    
    let newArray = [];
    if (a<b){
        for (var i = a ; i <= b ; i++){
            newArray.push(i);
        }
    }

    return newArray;
}

console.log(between(1,4));