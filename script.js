
// display results
function displayResult(results) {

   // reference for old results message and the display area
   let oldMessage = document.body.querySelector('p');
   let msgDisplay = document.getElementById('result');

   // if an old results message is already on the page, remove it
   if(oldMessage) {
      msgDisplay.removeChild(oldMessage);
   }
   // display the most recent results message on the page
      msgDisplay.appendChild(results);
}

// compare user input to random number and give appropriate response
function evaluate(guess) {

    let results;

     // guess is too low
     if(guess < randomNum) {
        results = document.createElement('p');
        results.innerHTML = `
        You guessed too low. Try again. 
        Attempts: ${attemptCount}`;
        results.style.color = 'red';
     }
     // guess is too high
     else if(guess > randomNum) {
        results = document.createElement('p');
        results.innerHTML = `
        You guessed too high. Try again. 
        Attempts: ${attemptCount}`;
        results.style.color = 'red';
     }
     // guess is correct
     else {
        results = document.createElement('p');
        results.innerHTML = `
        Random Number: ${randomNum} <br>
        You guessed correctly! You Win! 
        Attempts: ${attemptCount}`;
        results.style.color = 'mediumspringgreen';
     }

     // display results
     displayResult(results);
}

// validate the user input
function validateInput() {


    // block scope variable: reference input box HTML element value
    let guess = document.getElementById('guess').value;

    // validation: conditions where user input is invalid
    if( guess === "" || guess.includes(".") || Number(guess) < 0 || Number(guess) > 100) {

        // if input is invalid, alert user, clear out input value and set cursor to input box
        alert(`Invalid input. Try again.`);
        document.getElementById('guess').value = "";
        document.getElementById('guess').focus();
    }
    // if input is valid, count as an attempt and evaluate
    else {
      attemptCount++;
      evaluate(Number(guess));
    }
}


// global variables: reference submit button HTML element in JavaScript code
let attemptCount = 0;
let submit = document.getElementById('submitButton');
submit.onclick = validateInput;

// generate random number between 0 and 100 (inclusive of both values)
let randomNum = Math.floor(Math.random() * 101);
