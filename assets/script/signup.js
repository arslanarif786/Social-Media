//signup function
function storevalue() {

    w = document.getElementById("fname").value;
    x = document.getElementById("lname").value;
    u = document.getElementById("username").value;
    y = document.getElementById("email").value;
    z = document.getElementById("password").value;
    // i = document.getElementById("policy").value;
    //console.log("policy", i);


    regName = /^[a-zA-Z]{3,30}$/;
    regUsername = /^[a-zA-Z.0-9_]{5,30}$/;
    regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    regPasscode = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    p = {
        fname: w,
        lname: x,
        username: u,
        email: y,
        password: z,
    };

    data = localStorage.getItem("data");

    data = data == null ? [] : JSON.parse(data);

    //emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;

    // to check the dulpicate entries
    if (data.some((e) => {
            return e.email == y;
        })) {
        alert("duplicate data");
    }
    // to enter the new inputs
    else {
        if (w === '' || w == null || !regName.test(w)) {
            alert('invalid first name');
            //alert("First name is required");
        } else if (x === '' || x == null || !regName.test(x)) {
            alert('invalid last name');
            //alert("First name is required");
        } else if (u === '' || u == null || !regUsername.test(u)) {
            alert("invalid username");
        } else if (y === '' || y == null || !regEmail.test(y)) {
            alert('Should be in the format example@mail.com');
        } else if (z === '' || z == null || !regPasscode.test(z)) {
            alert("Password must be of 8 characters long, with at least a symbol, upper and lower case letters and a number");
        } else if (z != '') {
            data.push(p);
            data = JSON.stringify(data);
            localStorage.setItem("data", data);
            alert("your Account has been created");
            //window.location.href("login.htm");
            //window.open("login.htm", "_self");
            location.href = "login.htm";
        }
    }
}