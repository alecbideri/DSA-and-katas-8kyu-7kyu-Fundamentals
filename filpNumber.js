function flipNumber(num){
  let reversed = num.split('').reverse().join('');

  for(let i = 1 ; i < num.length ; i++){
    const reversedPart = reversed.substring(i).split('').reverse().join('');
    reversed = reversed.substring(0,i) + reversedPart;
  }

  return reversed ;
}

console.log(flipNumber('012'));
