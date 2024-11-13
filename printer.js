function printerError(string){
  let errors = 0 ;
  let newString = string.split('');

  for (var i = 0 ; i < newString.length ; i++){
    if (/[^a-m]/.test(newString[i])){
      errors+=1;
    }
  }

  return `${errors}/${newString.length}`;
}

// another solution 

function PrinterError(string){
  let count = 0 ;

  for (var i = 0 ; i < string.length ; i++){
    if (string[i] > "m"){
      count++;
    }
  }

  return `${count}/${string.length}`;
}

console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'));
console.log(PrinterError('aaaxbbbbyyhwawiwjjjwwm'));