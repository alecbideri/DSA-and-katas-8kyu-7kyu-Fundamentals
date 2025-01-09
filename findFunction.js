var findFunction = function (func , arr){
  const foundFunction = func.find(item => typeof item === 'function');
  return arr.filter(foundFunction);
}

// Another alternative 

function FindFunction(func , arr){
  return arr.filter(func.find(item => typeof item === 'function') [0]);
}