// first find the difference between the minimum and the maximum 
// substract that from the ideally gap 

function consecutive(array){
  
  if (array.length === 0 || array.length === 1){
    return 0 ;
  }
  
  array.sort((a,b)=> a-b);

  let min = array[0];
  let max = array[array.length-1];

  let result = max - min - (array.length - 1);

  return result ;
  
}


console.log(consecutive([1,5]));
