function shorter(a,b){
    let length1 = a.length ;
    let length2 = b.length ;



    if(length1 > length2){
        return `${b}${a.split('').reverse().join('')}${b}`
    }else if (length1 === length2){
        return `${b}${a.split('').reverse().join('')}${b}`
    }else{
        return `${a}${b.split('').reverse().join('')}${a}`
    }
}

console.log(shorter("first", "abcde"));
