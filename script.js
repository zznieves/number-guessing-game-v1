
// method to link to submit button onclick property
function evaluate() {
    // variables
    let guess = document.getElementById('guess').value;

    // test code
    alert(guess);
    alert(typeof guess);
}

let submit = document.getElementById('submitButton');

submit.onclick = evaluate;
