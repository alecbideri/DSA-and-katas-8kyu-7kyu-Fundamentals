function calculate(amount , rating){

    let newWord = rating.toUpperCase();

    switch(newWord){
        case "EXCELLENT" :
            return Math.ceil(amount*0.20);
        case "GREAT" :
            return Math.ceil(amount*0.15);
        case "GOOD" :
            return Math.ceil(amount*0.10);
        case "POOR" :
            return Math.ceil(amount*0.05);
        case "TERRIBLE" :
            return amount;
        default : 
        return "Rating not recognized";
        
    }
}

console.log(calculate(26.95 , "good"));