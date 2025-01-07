function excelCalc(count){
  let result = 0 ;

  for(var i = 0 ; i < count.length ; i++){
    result = result * 26 + (count.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
  }

  return result ; 
}

console.log(excelCalc('AA'));
