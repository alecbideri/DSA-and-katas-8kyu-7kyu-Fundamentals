function closeCompare(a , b , margin = 0 ){
   let diff = Math.abs(a-b);

   if(diff <= margin){
    return 0 ;
   }

   return a > b ? 1 : -1 ;
}

console.log(closeCompare(2, 5, 3))