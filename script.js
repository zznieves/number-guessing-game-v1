
function evaluate(guess, randomNum, count) {

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
        Random Number: ${randomNum}
        Your guess: ${guess}
        You guessed correctly! You Win! 
        Attempts: ${attemptCount}`;
        results.style.color = 'mediumspringgreen';
     }

     // display results
     document.getElementById('web-app').appendChild(results);
}

// method to link to submit button onclick property
function validateInput() {

    attemptCount++;

    // block scope variable: reference input box HTML element value
    let guess = document.getElementById('guess').value;

    // validation: conditions where user input is invalid
    if( guess === "" || guess.includes(".") || Number(guess) < 0 || Number(guess) > 100) {

        // if input is invalid, alert user, clear out input value and set cursor to input box
        alert(`Invalid input. Try again. Attempts: ${attemptCount}`);
        guess.value = "";
        document.getElementById('guess').focus();
    }

    // if input is valid, compare it to the random number and respond accordingly
    evaluate(Number(guess), randomNum, attemptCount);


    // test code
    //alert(guess);
    //alert(typeof guess);
}

// global variables: reference submit button HTML element in JavaScript code
let attemptCount = 0;
let submit = document.getElementById('submitButton');
submit.onclick = validateInput;

// generate random number between 0 and 100 (inclusive of both values)
let randomNum = Math.floor(Math.random() * 101);
