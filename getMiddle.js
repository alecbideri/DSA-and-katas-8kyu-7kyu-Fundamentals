function getMiddle(string){
  if(string.length % 2 ===0){
    return string[string.length / 2-1] + string[string.length / 2]; 
  }else {
    return string[Math.floor(string.length /2)];
  }
}

console.log(getMiddle('testa'));
