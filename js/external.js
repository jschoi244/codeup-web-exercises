console.log("Hello from external JavaScript");
alert("Welcome to my Website");
let color = prompt("What's your favorite color?");
alert(`Great, ${color} is my favorite color too!`);

// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.
//
//     You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
let littleMermaidRentallength = prompt("How many days for Little Mermaid?");
let  brotherBearRentalLength= prompt("How many days for Brother Bear");
let herculesRentalLength = prompt("How many days for Hercules?");
alert(`Total cost is $${littleMermaidRentallength * 3 + brotherBearRentalLength * 3 + herculesRentalLength * 3}`)