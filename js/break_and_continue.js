let userInput;
while (
    (userInput = parseInt(prompt("Enter an odd number:"))) &&
    (typeof userInput === 'number' && userInput % 2 === 0)) {}

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