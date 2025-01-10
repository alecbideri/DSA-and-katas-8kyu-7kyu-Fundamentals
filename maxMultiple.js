function maxMultple(divisor , bound){
  let max = 0 ; 

  for (var i = 1 ; i <= bound ; i++){
    if(i % divisor === 0 && i > max) {
      max = i ;
    }
  }

  return max ;
}

console.log(maxMultple(2,7));
