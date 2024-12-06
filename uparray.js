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


// another real submitted approach 

function upArray(array) {
    if (array.length === 0) {
        return null;
    }

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number" || array[i] < 0 || array[i] > 9 || !Number.isInteger(array[i])) {
            return null;
        }
    }


    let carry = 1; 
    for (let i = array.length - 1; i >= 0; i--) {
        array[i] += carry;
        if (array[i] > 9) {
            array[i] = 0;
            carry = 1; 
        } else {
            carry = 0; 
            break;
        }
    }

   
    if (carry === 1) {
        array.unshift(1);
    }

    return array;
}


