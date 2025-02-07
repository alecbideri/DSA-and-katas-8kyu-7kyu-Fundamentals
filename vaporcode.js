function vaporcode(string){
  return string
    .toUpperCase()
    .split('')
    .filter(char=> char !== ' ')
    .join('  ');
}

console.log(vaporcode("Let's go to the movies"));


