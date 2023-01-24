const passwordInitial = document.getElementById("password");
const passwordConfirm = document.getElementById("password_confirm");
const submit = document.getElementById("submit");
function matchPasswords() {
    if (passwordInitial !== passwordConfirm) {
        alert("passwords do not match");
    }
    else {
        return;
    }
}

// Event Listener
submit.addEventListener('click', function(){
    matchPasswords()
});