function points(game){
    let points = 0 ;
    
    for (var i = 0 ; i < game.length ; i++){
        const [x , y] = game[i].split(":").map(Number);
        if(x>y){
            points+= 3 ;
        }else if (x===y){
            points+=1;
        }
    }

    return points;
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))