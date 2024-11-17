function mumbling(string) {
    let splitedString = string.split('');
    let newArray = [];

    for (let i = 0; i < splitedString.length; i++) {
        // Repeat the character (i + 1) times
        let repeated = splitedString[i].toUpperCase() + splitedString[i].toLowerCase().repeat(i);

        // Push the result to the array
        newArray.push(repeated);
    }

    // Join the array with "-" as a separator
    return newArray.join('-');
}

console.log(mumbling("ZpglnRxqenU"));
