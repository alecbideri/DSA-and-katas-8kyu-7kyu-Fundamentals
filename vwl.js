function shortcut(string){
    let newString = string.split('');
    let newWord = [];

    for(var i = 0 ; i < string.length ; i++){
        if (/[aeiou]/gi.test(string[i])){
            newWord.push("");
        }else {
            newWord.push(string[i]);
        }
    }

    return newWord.join('');
}

// simple solution 

function Shortcut(string){
    return string.replace(/[aeiou]/gi , '');
}
console.log(shortcut("Hello W0rld"));