function initials(n){
  let newWord = n.split(' ');

  for(var i = 0 ; i < newWord.length - 1 ; i++){
    newWord[i] = newWord[i][0].toUpperCase() + '.' ;
  }

  newWord[newWord.length-1] = newWord[newWord.length-1][0].toUpperCase() + newWord[newWord.length -1].slice(1);

  return newWord.join('');
}

console.log(initials('barack hussain Obama'));
