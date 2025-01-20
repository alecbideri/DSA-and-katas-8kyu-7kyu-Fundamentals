function maxProduct(numbers, size){
  let newArray = numbers.sort((a,b)=> b-a);
  let maxProduct = 1 ;
  
  for (let i = 0 ; i < size ; i++){
    maxProduct *= numbers[i];
  }

  return maxProduct;
}

console.log(maxProduct([1,2,3,4] ,2));
