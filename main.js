
// DOM Variables
const passwordInitial = document.getElementById("password");
const passwordConfirm = document.getElementById("confirm");
const noMatch = document.getElementById("password-validation"); // Password validation message
const tel = document.getElementById("phone-number"); // Phone number input field
const number = document.getElementById("number-validation"); // Phone number validation message
const submit = document.getElementById("submit");


// Verifies that both password fields match
function matchPasswords() {
    if (passwordInitial !== passwordConfirm) {
        noMatch.innerText = "passwords do not match";
    }
    else {
        return;
    }
}

// Clears password cvalidation message
function clearMessage() {
    noMatch.innerText = '';
}

// Event Listener
submit.addEventListener('click', function(){
    matchPasswords();
})

// EL that clears password validation message when user selects either password input fields
passwordInitial.addEventListener('click', function() {
    clearMessage();
})
passwordConfirm.addEventListener('click', function() {
    clearMessage();
})

// EL that displays phone number validation message
tel.addEventListener('mouseover', () => {
    number.innerText = "Ex: 123-456-7890";
})
tel.addEventListener('mouseout', () => {
    number.innerText = '';
})