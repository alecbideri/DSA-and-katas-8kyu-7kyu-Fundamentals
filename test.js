function reverseAndShift(str) {
  let reversed = str.split('').reverse().join('');

  for (let i = 1; i < str.length; i++) {
    const reversedPart = reversed.substring(i).split('').reverse().join(''); 
    reversed = reversed.substring(0, i) + reversedPart; 
  }

  return reversed;
}

// Example usage:
const inputString = "012345";
const result = reverseAndShift(inputString);
console.log(result); // Output: "504132"