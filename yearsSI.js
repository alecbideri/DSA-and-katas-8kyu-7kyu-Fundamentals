function calculateYears(principal , interest , tax , desired){
    if (principal >= desired) return 0 ;

    let year = 0 ;

    while(principal < desired){
        let interests = principal * interest ;
        let taxes = interests * tax
        principal = principal + (interests - taxes);
        year ++;
    }

    return year ;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));