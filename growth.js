function nbYear(p0 , percent , aug , p){
  let years = 0 ;
  let population = p0 ;

  while (population < p){
    population+=Math.floor(population * (percent/100) + aug);
    years ++ ;
  }

  return years ; 
}

console.log(nbYear(1500,5,100,5000));