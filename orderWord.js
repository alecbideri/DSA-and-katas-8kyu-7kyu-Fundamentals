function orderWord(string){
  if (string === ''){
    return "Invalid String!"
  }

  let newWord = string.split('').sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
  return newWord;
}

console.log(orderWord(''));
