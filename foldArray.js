// create a temp array to hold the folded values 
// if the array lenght is odd , the middle is untouchable 
// repopulate the newArray with changes 

function fold(array , runs){
    let newArray = [...array];
   

    for(var times = 0 ; times < runs ; times++){
        let tempArray = [];
        let length = newArray.length;

        for(var i = 0 ; i < Math.floor(length/2) ; i++){
            tempArray.push(newArray[i] + newArray[length -1-i]);
        }

        if(length%2!==0){
            tempArray.push(newArray[Math.floor(length/2)]);
        }

        newArray = tempArray;
    }

    return newArray;
}

console.log(fold([1,2,3,4,5],2));
