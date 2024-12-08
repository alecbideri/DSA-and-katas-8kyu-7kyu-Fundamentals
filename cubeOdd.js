function cubeOdd(arr){

    if(arr.some(item => typeof item !== 'number')){
        return undefined;
    }

    let newArray = [];
    let sum = 0 ;

    for (var i = 0 ; i < arr.length ; i++){
        if (arr[i] % 2 !== 0){
            sum+= Math.pow(arr[i] , 3);
        }
    }
    
    return sum ;
}

console.log(cubeOdd([1,2,3,4]));
