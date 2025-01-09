function make_lazy(func , ...args){
  return () =>{
    return func(...args);
  }
}