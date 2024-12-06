function extraPerfect(n){
    let newArray = [];
    
    for (var i = 0 ; i <= n ; i++){
        if(i%2!==0){
            newArray.push(i);
        }
    }

    return newArray;
}

console.log(extraPerfect(3));

// another unique amazing approach 

function extra(n){
    let newArray = [];

    for (var i = 0 ; i < n ; i+=2){
        newArray.push(i);
    }

    return newArray;
}
