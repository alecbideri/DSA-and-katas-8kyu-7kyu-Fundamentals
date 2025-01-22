function jadenCase(String){
  return String 
    .split(' ')
    .map(word=>word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


// another approach 

String.prototype.toJadenCase = function () {
  return this 
  . split(' ')
  .map(word=> word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

};

console.log(jadenCase("How can mirrors be real if our eyes aren't real"));
