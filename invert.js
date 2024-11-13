function invert(array){
  let newArray = [];

  if (array.length < 0 ){
    return newArray;
  }

  for (var i = 0 ; i < array.length ; i++){
    if(array[i] > 0){
      newArray.push(array[i] * -1);
    }else {
      newArray.push(array[i] * -1);
    }
  }

  return newArray ;
  
}

// simple solution 

function Invert (array){
  let invert = array.map(num=>-num);
  return invert;
}
console.log(invert([]));
console.log(Invert([1,2,-4]));