function increment(n){
    let newArray = [];

    for(var i = 0 ; i < n.length ; i++){
        newArray.push(n[i] + i + 1);
    }

    let newPro = [];

    for(var j = 0 ; j < newArray.length ; j++){
        if(newArray[j] > 9 ){
            newPro.push(Number(String(newArray[j]).slice(-1)));
        }else{
            newPro.push(newArray[j]);
        }

        
    }

    return newPro;
}

console.log(increment([4, 6, 9, 1, 3]));

// other upfront solution 

function increment(num){
    let newArray = [];

    for(var i = 0 ; i < num.length ; i++){
        newArray.push((num[i]+ i + 1)%10);
    }

    return newArray;
}