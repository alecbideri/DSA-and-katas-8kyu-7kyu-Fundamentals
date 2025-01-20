function productArray(numbers){
  const n = numbers.length ;
  const productArr = new Array(n);

  for(let i = 0 ; i < n ; i++){
    let product = 1; 

    for(let j = 0 ; j < n ;j++){
      if(i!==j){
        product*=numbers[j];
      }
    }

    productArr[i] = product;
  }

  return productArr ;
}

console.log(productArray([1,2,5]));
