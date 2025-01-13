function getCount(words){

  if (typeof words !== 'string'){
    throw new TypeError('input must be a string');
  }

  if (typeof words === 'undefined' || words.length === 0){
    return {'vowels' : 0 , 'consonants' : 0};
  }

  const vowels = 'aieou';
  const consonants = 'bcdfghjklmnpqrstvwxyz';

  const noramalized = words.toLowerCase();

  let vowelsCount = 0 ;
  let consonantsCount = 0 ;

  for(const char of noramalized){
    if(vowels.includes(char)){
      vowelsCount++ ;
    } else if (consonants.includes(char)){
      consonantsCount++ ;
    }
  }
   
  return {'vowels' : vowelsCount , 'consonants' : consonantsCount};
}


console.log(getCount(12345));
