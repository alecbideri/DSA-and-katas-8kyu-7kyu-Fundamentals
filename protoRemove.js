function protoRemove(integerList , valueList){
    
    let newArray = [];
    
   for(var i = 0 ; i < integerList.length ; i++){
    if(!valueList.includes(integerList[i])){
        newArray.push(integerList[i]);
    }
    
   }

    return newArray;
}

console.log(protoRemove([1, 1, 2, 3, 1, 2, 3, 4], [1, 3] ))