function getCount(words){
  const vowels = 'aieou';
  const consonants = 'bcdfghjklmnpqrstvwxyz';

  const normalized = words.toLowerCase();

  let vowelsCount = 0 ;
  let consonantsCount = 0 ;

  for(const char of normalized){
    if(vowels.includes(char)){
      vowelsCount++ ;
    } else if (consonants.includes(char)){
      consonantsCount++ ;
    }
  }
   
  return {'vowels ' : vowelsCount , 'consonants' : consonantsCount};
}

console.log(getCount('test'));