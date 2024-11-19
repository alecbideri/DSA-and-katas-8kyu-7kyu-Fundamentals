function sortByLength(array){
    let temp = [];

    for(var i = 0 ; i < array.length ; i++){
        for (j = i + 1 ; j < array.length ; j++){
            if(array[i].length > array[j].length){
                temp = array[i];
                array[i] = array[j];
                array[j] = temp ;
            }
        }
    }

    return array ;
}

// simple solution 

function SortByLength(array){
    return array.sort((a,b) => a.length - b.length);
}

console.log(SortByLength(["", "Moderately", "Brains", "Pizza"]));