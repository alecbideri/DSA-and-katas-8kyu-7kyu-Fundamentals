function numberToTiers(number) {
  
    const numStr = number.toString();
    const tiers = [];
    
    
    for (let i = 1; i <= numStr.length; i++) {
        
        tiers.push(numStr.slice(0, i));
    }
    
    return tiers;
}

console.log(numberToTiers(10.2));    

function NumberToTiers(number) {
  
    const numStr = number.toString();
    const tiers = [];
    
    
    for (let i = 1; i <= numStr.length; i++) {
        
        tiers.push(numStr.substring(0, i));
    }
    
    return tiers;
}

console.log(NumberToTiers(10.2));    

function numBerToTiers(number) {
  
    const numStr = number.toString();
    const tiers = [];
    
    
    for (let i = 1; i <= numStr.length; i++) {
        
        tiers.push(numStr.substr(0, i));
    }
    
    return tiers;
}

console.log(numBerToTiers(10.2));    