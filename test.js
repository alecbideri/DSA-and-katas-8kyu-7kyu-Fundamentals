function insert(num) {
    let newArray = String(num).split(''); // Convert number to array of digits
    let anotherArray = [];                // Store resulting elements

    for (var i = 0; i < newArray.length; i++) {
        anotherArray.push(newArray[i]);   // Add the current digit
        
        // Check if both current and next digits are odd
        if (i < newArray.length - 1 && Number(newArray[i]) % 2 !== 0 && Number(newArray[i + 1]) % 2 !== 0) {
            anotherArray.push('-');       // Insert hyphen between two odd numbers
        }
    }

    return anotherArray.join('');         // Join the array into a single string
}

console.log(insert(124578)); // Example: "1245-7-8"
