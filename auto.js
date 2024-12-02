function auto(num){
    let power = Math.pow(num ,  2);
    let newNum = parseInt(String(power).slice(-(num.toString().length)));

    if(newNum === num){
        return "Automorphic";
    }else {
        return "Not!!";
    }
}

console.log(auto(169));

