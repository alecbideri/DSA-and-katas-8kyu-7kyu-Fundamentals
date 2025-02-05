function tidyNumber(string){
  let newNumber = string.split('');

  for(let i = 0 ; i < newNumber.length -1 ; i++){
    if(Number(newNumber[i]) > Number(newNumber[i+1])){
      return false ;
    }
  }
  return true ;
}

console.log(tidyNumber('21'));

