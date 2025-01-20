function solve(s){
  let largestNumber = null ;
  let currentNumberString = "";

  for (let i = 0 ; i < s.length ; i++){
    const character = s[i];

    if(/[0-9]/.test(character)){
      currentNumberString +=character
    }else{
      if(currentNumberString !== ''){
        const currentNumber = parseInt(currentNumberString , 10);

        if(largestNumber === null || currentNumber > largestNumber){
          largestNumber = currentNumber;
        }

        currentNumberString = "";
      }
    }
  }

  if (currentNumberString !== '') {
    const currentNumber = parseInt(currentNumberString, 10);

    if (largestNumber === null || currentNumber > largestNumber) {
      largestNumber = currentNumber;
    }
}

  return largestNumber;
}

