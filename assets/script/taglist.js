// fetch data in post form

var ApiKey = "61850f04239c632b476dd0ba";

function tagList() {

    const req = fetch('https://dummyapi.io/data/v1/tag?limit=10',
        {
            method: 'GET', headers: {
                'app-id': ApiKey,
            }
        })

    .then((response) => {
        console.log(response);
        return response.json();
        

    }).then((data) => {

        console.log(data);

        user_tags = document.getElementById("tags-list");

        let t = "";

        data.data.forEach(tagLst => {


            t += ` 
            <!----- MESSAGE ----->
            <div class="message">
               
                <button onclick ="specificPostCallWithTag('${tagLst}')"> <h5>${tagLst}</h5> </button>
                
                </div>

        `
        });

        user_tags.innerHTML = t;

    });
}


function specificPostCallWithTag(word) {
    console.log("in specific funtion");
    
    
    const req = fetch('https://dummyapi.io/data/v1/tag/'+word+'/post?limit=10', 
    {
        method: 'GET', headers: {
            'app-id': ApiKey,
        }
    });

    req.then(function (response) {

        console.log(response);

        return response.json();
    }).then(function (data) {

        console.log("tagData",data);

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





tagList();
