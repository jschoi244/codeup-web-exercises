let userInput;
while (isNaN(userInput) || userInput % 2 === 0) {
    userInput = parseInt(prompt("Enter an odd number:"));
    console.log(userInput);
}

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        continue;
    }
    if (i === userInput) {
        console.log(`Yikes! Skipping number: ${i}`);
        continue;
    }
    console.log(i);
}