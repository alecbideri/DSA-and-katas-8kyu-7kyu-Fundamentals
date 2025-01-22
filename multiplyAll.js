function multiplyAll(arr , s){

  let newArray = [];

  for(let i = 0 ; i < arr.length ; i++){
    newArray.push(arr[i] * s);
  }

  return newArray ;
}



// another alternative 

function MultiplyAll(arr){
  return function(s){
    return arr.map(element => element * s);
  };
}

console.log(MultiplyAll([1,2,3])(3)));