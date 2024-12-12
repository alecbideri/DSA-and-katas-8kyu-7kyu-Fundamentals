function delteNth(array , n){
    let count = {};
    let result = [];

    for (var i = 0 ; i < array.length ; i++){
        let num = array[i];
        count[num] = (count[num] || 0) + 1 ;

        if (count[num] <=n){
            result.push(num);
        }
    }

    return result;
}

console.log(delteNth([2,2,1,1,3,3] ,1));
