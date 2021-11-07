// fetch data in post form

var ApiKey = "61850f04239c632b476dd0ba";

function userList() {

    const req = fetch('https://dummyapi.io/data/v1/user?limit=10', {
            method: 'GET',
            headers: {
                'app-id': ApiKey,
            }
        })

        .then((response) => {
            console.log(response);
            return response.json();

        }).then((data) => {

            // console.log(data);

            user_feedss = document.getElementById("user-list");

            let output = "";

            data.data.forEach(uList => {


                output += ` 
            <!----- MESSAGE ----->
            <div class="message">
                <div class="profile-photo" >
                
                <span><img src="${uList.picture}" onclick="fullUserProfile('${uList.id}')"></span>
                
                </div>
                <div class="message-body">
                    <button id = "myBtn" type = "button" onclick =specificPostCall('${uList.id}') > <h5>${uList.firstName}</h5> </button>
                    <p class="text-muted">Just woke up bruh</p>
                </div>
                </div>
        `
            });

            user_feedss.innerHTML = output;

        });
}
// show user profile on click



function specificPostCall(id) {
    console.log("in specific Post Call funtion");

    const req = fetch('https://dummyapi.io/data/v1/user/' + id + '/post?limit=10', {
        method: 'GET',
        headers: {
            'app-id': ApiKey,
        }
    });

    req.then(function (response) {

        console.log(response);

        return response.json();
    }).then(function (data) {

        console.log(data);

        feedss = document.getElementById("fee");

        let out = "";

        data.data.forEach(user => {


            out += `<div class="feed">

        <div class="head">

            <div class="user">

                <div class="profile-photo">

                   <img src="${user.owner.picture}">

                </div>

                <div class="ingo">

                 <h3 id="postUserName">${user.owner.firstName}</h3>

                 </div>  

            </div>

        </div>

        <div class="photo">

           <img src="${user.image}">

        </div>

        <div class="action-buttons">

            <div class="interaction-buttons">

                <span><i class="uil uil-heart"></i></span>

                <span><i class="uil uil-comment-dots"></i></span>

            </div>
        </div>

        <div class="caption">

            <p><b>Lana Rose</b> Lorem ipsum dolor sit quisquam eius. <span class="harsh-tag">#lifestyle</span></p>

        </div>

        <div class="comments text-muted">View all  ${user.likes} </div>

    </div>
        `
        });

        feedss.innerHTML = out;

    });
}


function fullUserProfile(id) {

    const user = fetch('https://dummyapi.io/data/v1/user/' + id, {
            method: 'GET',
            headers: {
                'app-id': ApiKey,
            }
        })

        .then((response) => {
            console.log(response);
            return response.json();

        }).then((data) => {

            console.log('data', data);
            
            localStorage.setItem("UserProfile", JSON.stringify(data));
            location.href = "userProfile.html";
        });
}

////////////      show user profile on click

userList();