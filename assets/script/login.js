//login function
function checkvalue() {
    w = document.getElementById("email").value;
    x = document.getElementById("password").value;

    data = JSON.parse(localStorage.getItem("data"));

    currentUser = data.find(e => {
        return e.email == w && e.password == x;
    })
    if (currentUser) {
        alert("login sucessfully");
        localStorage.setItem("CurrentUser", JSON.stringify(currentUser));
        location.href = "socialMedia.html";

    } else {
        alert("account not registered")
    }
}