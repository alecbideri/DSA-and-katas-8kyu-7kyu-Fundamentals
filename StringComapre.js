function compare(array){
 let reversedArray = [];

 for (var i = 0 ; i < array.length ; i++){
    reversedArray.push(array[i].split('').reverse().join(''));
 }

return reversedArray.sort((a,b) => b.codePointAt(0) - a.codePointAt(0));

}

// easy way 

function Compare(array){
    let reversed = [];

    for (var i = 0 ; i < array.length ; i++){
        reversed.push(array[i].split('').reverse().join(''));
    }
    
    return reversed.sort((a,b) => b.localeCompare(a));
}

console.log(Compare(["Alec" , "Bideri" , "Mike" , "Benie"]));