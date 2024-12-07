function movie (card , ticket , perc){
    
    let n =  0 ; 
    let systemA = 0 ;
    let systemB = card ;
    let currentTicketCost = ticket * perc ;

    while (Math.ceil(systemB) >= systemA){
        n ++ ;
        systemA = ticket * n ;
        systemB += currentTicketCost ;
        currentTicketCost *= perc ;
   
    }

    return n;

}

console.log(movie(500 , 15, 0.9));
