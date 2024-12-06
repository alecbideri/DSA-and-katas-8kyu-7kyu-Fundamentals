function largest(n , array){
    let newArray = array.sort((a,b)=> b-a);
    let newPro = [];

    for(var i = 0 ; i < n ; i++){
        newPro.push(newArray[i]);
    }

    return newPro.sort((a,b)=>a-b);
}
console.log(largest(2 , [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

// the optimized solution 

function largest(n , array){
    return 0 ? [] : array.sort((a,b)=>a-b).slice(-1);
}