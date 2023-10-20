let userInput;
while (isNaN(userInput) || userInput % 2 === 0 || userInput < 1 || userInput > 50) {
    userInput = parseInt(prompt("Enter an odd number between 1 and 50:"));
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

