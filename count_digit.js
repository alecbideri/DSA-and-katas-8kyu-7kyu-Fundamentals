function nbDig(n , d){
    let count = 0 ;

    for(var i = 0 ; i <= n ; i++){
        let square = (i*i).toString();

        for(let char of square){
            if(char === d.toString()){
                count ++;
            }
        }
    }

    return count ;
}

console.log(nbDig(25 , 1))