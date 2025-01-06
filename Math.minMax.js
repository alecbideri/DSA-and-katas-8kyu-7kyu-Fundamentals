function findMathMin(arr){
  const minimal = Math.min(...arr);
  const maximal = Math.max(...arr);

  return [minimal , maximal];
}

// another alternative

function getMaxMin(arr){
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(getMaxMin([1]));
