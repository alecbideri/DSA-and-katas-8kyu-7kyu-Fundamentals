function predict(arr){
    let newNumber = [] ;
    let sum = 0 ;
    for (var i = 0 ; i < arr.length ; i++){
        newNumber.push(arr[i] * arr[i]);
    }
    return Math.floor(Math.sqrt(newNumber.reduce((a,b) => a + b , 0)) / 2) ;
}


// another approach 

function Predict(age1, age2, age3, age4, age5, age6, age7, age8) {
    let ageArray = [age1, age2, age3, age4, age5, age6, age7, age8];
    let sum = 0 ;
    let newNumber = [];

    for (var i = 0 ; i < ageArray.length ; i++){
        newNumber.push(ageArray[i] * ageArray[i]);
    }
    return Math.floor(Math.sqrt(newNumber.reduce((a,b) => a + b , 0)) / 2) ;
}

console.log(Predict(65, 60, 75, 55, 60, 63, 64, 45))