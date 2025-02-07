function backronym(string){
  return string 
    .toUpperCase()
    .split('')
    .map(char=>dict[char])
    .join(' ');
}

