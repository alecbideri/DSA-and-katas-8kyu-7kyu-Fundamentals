function capitals(word){
    let newArray = word.split('');
    let newNumbers = [];

    for (var i = 0 ; i < word.length ; i++){
        if(newArray[i] === newArray[i].toUpperCase()){
            newNumbers.push(i);
        }
    }

    return newNumbers ;
}

console.log(capitals("CodeWaRs"));