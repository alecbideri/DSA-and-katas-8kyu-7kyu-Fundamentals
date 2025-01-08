
// split the string in a new array 
// initiate two strings to hold the compare value 
// iterate and use locale compare

function rakeGarden(garden){
  let newArray = garden.split(' ');
  let word1 = 'gravel';
  let word2 = 'rock';

  for(var i = 0 ; i < newArray.length ; i++){
    if(newArray[i] != word1 && newArray[i] != word2){
      newArray[i] = 'gravel'
    }
  }

  return newArray.join(' ');
}

let garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
console.log(rakeGarden(garden));
