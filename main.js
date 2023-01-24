const passwordInitial = document.getElementById("password");
const passwordConfirm = document.getElementById("password_confirm");

function matchPasswords() {
    if (passwordInitial !== passwordConfirm) {
        alert("passwords do not match");
    }
    else {
        return;
    }
}