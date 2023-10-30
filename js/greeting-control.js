// Import the getRandomGreeting function from your greeting-logic module (assuming it's in the same directory).
import getRandomGreeting from './greeting-logic.js';

// Function to handle user input and display a random greeting
function handleUserInput() {
    const nameInput = document.getElementById('nameInput');
    const greetingOutput = document.getElementById('greetingOutput');

    const userName = nameInput.value.trim();

    if (userName === '') {
        greetingOutput.textContent = 'Please enter your name.';
    } else {
        const randomGreeting = getRandomGreeting();
        greetingOutput.textContent = `${randomGreeting}, ${userName}!`;
    }
}

// Add an event listener to the form submit button
document.getElementById('submitButton').addEventListener('click', handleUserInput);
