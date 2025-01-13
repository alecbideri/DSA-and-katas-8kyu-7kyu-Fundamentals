function sumStrings(a,b){
  const sum = BigInt(a)  + BigInt(b);

  return sum.toString();
}

console.log(sumStrings('123' , '456'));
