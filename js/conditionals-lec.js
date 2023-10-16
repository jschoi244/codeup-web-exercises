let age = 12;
if (age >= 16) {
    console.log("You're eligible to drive.");
}
if (age < 16) {
    console.log("You can't drive yet.");
}

if (age >= 16) {
    console.log("You're eligible to drive.");
} else {
    console.log("You can't drive yet.");
}

let currentDay = prompt("What's the day today?").toLowerCase();
if (currentDay === 'monday' ||
    currentDay === 'tuesday' ||
    currentDay === 'wednesday') {
    console.log("I love " + currentDay)
} else {
    console.log(currentDay + " is not a valid day");
}

let letsPlay = confirm("Do you want to play?");
if (letsPlay) {
    console.log("Great let's play!");
} else {
    console.log("Maybe next time.");
}

const username = "user";
const password = "password";
const usernameInput = prompt("Enter a username");
const passwordInput = prompt("Enter a password");
if (username === usernameInput && password === passwordInput) {
    console.log("You are logged in.");
} else {
    console.log("Wrong credentials.");
}

let name = "Bob";
let greeting = (name === "Bob") ? ("Hello, " + name) : ("Hello stranger!");
console.log(greeting);

let day = "saturday";

switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log("It's a weekday");
        break;
    case "saturday":
    case "sunday":
        console.log("It's the weekend");
        break;
    default:
        console.log("Not a day of the week");
        break;
}

// using function and if/else
function sayHello(name) {
    if (name.length <= 20) {
        return `Hello, ${name}`;
    } else {
        return "That is way too long of a name.";
    }
}