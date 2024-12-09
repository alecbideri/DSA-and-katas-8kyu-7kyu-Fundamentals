function insert(num){
    let newArray = String(num).split('');
    let anotherArray = [];

    for (var i = 0 ; i < newArray.length ; i++){
        anotherArray.push(newArray[i]);

        if(i < newArray.length-1 && Number(newArray[i]) % 2!==0 && Number(newArray[i+1]) % 2 !==0){
            anotherArray.push("-");
        }
    }

    return anotherArray.join('');
}

console.log(insert([454793]));
