function swap(string){
    let splitedString = string.split('');
    let newArray = [];

    for (var i = 0 ; i < splitedString.length ; i++){
        if(/[aeiou]/i.test(splitedString[i])){
            newArray.push(splitedString[i].toUpperCase());
        }else {
            newArray.push(splitedString[i]);
        }
    }

    return newArray.join('');
}

console.log(swap("Hello World!"));