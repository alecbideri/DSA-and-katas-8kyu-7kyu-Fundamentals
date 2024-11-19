function checkExam(array1 , array2){
    let sum = 0 ;

    for (var i = 0 ; i < array1.length ; i++){
        if (array2[i] === ""){
            sum += 0 ;
        }else if (array2[i] === array1[i]){
            sum+= 4 ;
        }else {
            sum-=1 ;
        }
    }

    if (sum < 0 ){
        return 0 ;
    }

    return sum ;
}

console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]));