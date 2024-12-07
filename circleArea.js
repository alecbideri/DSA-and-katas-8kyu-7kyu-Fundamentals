function circleArea(radius){
    if(radius <= 0){
        throw new Error("Error");
    }

    let area = radius*radius * 3.141592653589793 ;

    return Number(area.toFixed(3));
}
 
console.log(circleArea(0));
