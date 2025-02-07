function distance(array){

  let newArray = [];

  for (var i = 0 ; i < array.length -1; i++){
    if(array[i] > array[i+1]){
      newArray.push(array[i] - array[i+1]);
    }else {
      newArray.push(array[i+1] - array[i]);
    }
  }

  const sum = newArray.reduce((a,b)=> a+b,0);

  return sum ; 

}

console.log(distance([1,2,3]));
