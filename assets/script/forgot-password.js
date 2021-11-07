//forgot-password function
function forgotPass() {
    w = document.getElementById("email").value;
  
    data = JSON.parse(localStorage.getItem("data"));
    

    currentUser = data.some((e) => {
        return e.email == w
    })
    if (currentUser) {
        alert("Check your inox or spam!");
        location.href = "login.htm";
    } else {
        alert("account not registered!");
    }
}




