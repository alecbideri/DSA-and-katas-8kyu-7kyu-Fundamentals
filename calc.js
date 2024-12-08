function calc(num){
    let total1 = '';
    for(var i = 0 ; i < num.length ; i++){
        total1+=num.charCodeAt(i);
    }

    let total2 = '';
    for (var j = 0 ; j < total1.length ; j++){
        total2 += total1[j] === '7' ? '1' : total1[j];
    }

    let sumTotal1 = 0 ;

    for (var i = 0 ; i < total1.length ; i++){
        sumTotal1+= Number(total1[i]);
    }
    let sumTotal2 = 0 ;

    for (var i = 0 ; i < total2.length ; i++){
        sumTotal2+= Number(total2[i]);
    }

    return sumTotal1 - sumTotal2 ;
}

console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));
