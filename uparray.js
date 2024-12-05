function upArray(array){
    if(array.length === 0){
        return null ;
    }

    for(var i = 0 ; i < array.length ; i++){
        if(typeof array[i] !== "number" || array[i] < 0  || array[i] > 9 || !Number.isInteger(array[i])){
            return null ;
        }
    }

        if(array[0]===0){
            let hasOnlyZeros = array.every(num => num ===0);
            if(hasOnlyZeros){
                return [0,1];
            }
            array[array.length - 1] += 1;
            return array;
        }

        let newNum = BigInt(array.join('')) + 1n ;
        let anotherArray = String(newNum).split('').map(Number);
        return anotherArray;
    
}

console.log(upArray([1,-9]));