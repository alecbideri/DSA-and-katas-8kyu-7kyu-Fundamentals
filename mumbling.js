function mumbling(string){
    let splitedString = string.split('');
    let newArray = [];

    for ( var i = 0 ; i < splitedString.length ; i++){
        let repeated = splitedString[i].toUpperCase() + splitedString[i].toLowerCase().repeat(i);
        newArray.push(repeated);
    }

    return newArray.join("-");

}

console.log(mumbling("ZpglnRxqenU"));