data = JSON.parse(localStorage.getItem("data"));
currentUser = JSON.parse(localStorage.getItem("CurrentUser"));

function showUserData() {

    document.getElementById("d-fname").innerHTML = currentUser.fname;
    document.getElementById("d-lname").innerHTML = currentUser.lname;
    document.getElementById("d-username").innerHTML = currentUser.username;
    document.getElementById("d-email").innerHTML = currentUser.email;
    document.getElementById("d-password").innerHTML = currentUser.password;

}


//Update function orr function updateData()
$('#exampleModalCenter').on('shown.bs.modal', function (e) {
    document.getElementById("fname").value = currentUser.fname;
    document.getElementById("lname").value = currentUser.lname;
    document.getElementById("username").value = currentUser.username;
    document.getElementById("email").value = currentUser.email;
    document.getElementById("password").value = currentUser.password;
})

function replace() {
    f = document.getElementById("fname").value;
    l = document.getElementById("lname").value;
    u = document.getElementById("username").value;
    e = document.getElementById("email").value;
    p = document.getElementById("password").value;

    index = data.findIndex(x => x.email == e)
    data[index] = {
        email: e,
        fname: f,
        lname: l,
        username: u,
        password: p
    }
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("CurrentUser", JSON.stringify({
        email: e,
        fname: f,
        lname: l,
        username: u,
        password: p
    }));


}