function sumDigits(number){
    let newNumber = String(Math.abs(number)).split('');
    let sum = 0 ;

    for (var i = 0 ; i < newNumber.length ; i++){
        sum += parseInt(newNumber[i]);
}

return sum ;

}

console.log(sumDigits(-32));