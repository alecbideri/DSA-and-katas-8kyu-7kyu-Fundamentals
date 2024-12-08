function calc(string) {
    // Step 1: Convert each character to its ASCII code and concatenate them to form a single number (total1)
    let total1 = '';
    for (let i = 0; i < string.length; i++) {
        total1 += string.charCodeAt(i);
    }

    // Step 2: Replace all instances of '7' with '1' to form total2
    let total2 = '';
    for (let i = 0; i < total1.length; i++) {
        total2 += total1[i] === '7' ? '1' : total1[i];
    }

    // Step 3: Calculate the sum of digits for both total1 and total2
    let sumTotal1 = 0;
    for (let i = 0; i < total1.length; i++) {
        sumTotal1 += Number(total1[i]);
    }

    let sumTotal2 = 0;
    for (let i = 0; i < total2.length; i++) {
        sumTotal2 += Number(total2[i]);
    }

    console.log(`First total is ${total1} and next total is ${total2} , and the difference is ${sumTotal1} and  ${sumTotal2}`);

    // Step 4: Return the difference between the sums of digits
    return sumTotal1 - sumTotal2;
}

console.log(calc("ifkhchlhfd")); // Output: 96
