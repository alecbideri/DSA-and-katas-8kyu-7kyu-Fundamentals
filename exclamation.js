function exclamation(n ,s){
    for (var i = 0 ; i < s ; i++){
        let index = n.indexOf("!");
        if(index!== -1){
            n = n.slice(0, index) + n.slice(index + 1);
        }else {
            break ;
        }
    }

    return n ;
}

console.log(exclamation("!!!Hi !!hi!!! !hi",5));