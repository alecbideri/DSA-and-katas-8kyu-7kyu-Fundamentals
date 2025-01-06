// Higher order function implementation

function factory(x){
  return function(array){
    var newArray = [];

    for(var i = 0 ; i < array.length ; i++){
      newArray.push(x*(array[i]));
    }

    return newArray;
  }
}

console.log(factory(2)([1,2,3]));
