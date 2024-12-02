function leo(oscar){
    
    if(oscar > 88){
        return "Leo got one already!";
    }

    else if (oscar === 88){
      return "Leo finally won the oscar! `Leo is happy`";
    }else if(oscar===86){
        return "Not even for Wolf wallstreet?!";
    }else {
        return "When will you give Leo an Oscar?"
    }
}

console.log(leo(86));