function validatePIN(pin){
  if(pin.length !== 4 && pin.length !== 6){
    return false ;
  }

  for (var i = 0 ; i < pin.length ;i++){
    if(isNaN(parseInt(pin[i]),10)){
        return false ;
    }
  }

  return true ;
  
}

console.log(validatePIN("123sacdasd"));