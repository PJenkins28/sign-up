const passwordInitial = document.getElementById("password");
const passwordConfirm = document.getElementById("confirm");
const tel = document.getElementById("phone-number");
const number = document.getElementById("number-validation");
const submit = document.getElementById("submit");
const noMatch = document.getElementById("password-validation");
function matchPasswords() {
    if (passwordInitial !== passwordConfirm) {
            noMatch.innerText = "passwords do not match";
        }
        else {
            return;
        }
}

function clearMessage() {
    noMatch.innerText = '';
}

// Event Listener
submit.addEventListener('click', function(){
    matchPasswords()
});

// clears confirm password
passwordInitial.addEventListener('click', function() {
    clearMessage();
})
passwordConfirm.addEventListener('click', function() {
    clearMessage();
})
tel.addEventListener('mouseover', () => {
    number.innerText = "Ex: 123-456-7890";
})
tel.addEventListener('mouseout', () => {
    number.innerText = '';
})