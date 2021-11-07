userProfile = JSON.parse(localStorage.getItem("UserProfile"));

function showUserData() {

    document.getElementById("id").innerHTML = userProfile.id;
    document.getElementById("fname").innerHTML = userProfile.firstName;
    document.getElementById("lname").innerHTML = userProfile.lastName;
    document.getElementById("dob").innerHTML = userProfile.dateOfBirth;
    document.getElementById("gender").innerHTML = userProfile.gender;
    document.getElementById("phone").innerHTML = userProfile.phone;
    document.getElementById("email").innerHTML = userProfile.email;
    document.getElementById("title").innerHTML = userProfile.title;
    document.getElementById("city").innerHTML = userProfile.location.city;
    document.getElementById("country").innerHTML = userProfile.location.country;
    document.getElementById("state").innerHTML = userProfile.location.state;
    document.getElementById("street").innerHTML = userProfile.location.street;

}