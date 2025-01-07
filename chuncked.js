function chuncked(array, chunckedSize){
  const chunkedArr = [] ; 

  for(var i = 0 ; i < array.length ; i+=chunckedSize){
    chunkedArr.push(array.slice( i , i + chunckedSize));
  }

  return chunkedArr ; 
}

console.log(chuncked([1,2,3,4,5] , 2));

