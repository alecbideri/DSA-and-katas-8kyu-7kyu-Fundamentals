function add(...args){
  return args.reduce((sum , num , index) => sum + num * (index + 1) , 0 );
}

console.log(add(1,2,3));
