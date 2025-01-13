function isPanagram(string){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const normal = string.toLowerCase().replace(/[^a-z]/g, "");

  for(const char of alphabet){
    if(!normal.includes(char)){
      return false ;
    }
  }

  return true ;
}
console.log(isPanagram('he quick brown fox jumps over the lazy dog'));
