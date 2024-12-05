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


function parse(num){
    let parse = parseFloat(num);

    if(Number.isInteger(parse)){
        return null ;
    }else if (isNaN(num)){
        return null ;
    }

    return parse;
}

let num = 1 ;
console.log(parseFloat(num));
