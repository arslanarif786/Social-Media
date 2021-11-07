// fetch data in post form
range = 10;
function postCall(range) {

    const req = fetch('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca/post?limit=10' + range, 
    {
        method: 'GET', headers: {
            'app-id': "6184c9cba6776e70939f5e77",
        }
    });

    req.then(function (response) {

        console.log(response);

        return response.json();

    }).then(function (accessData) {

        console.log("accessData",accessData);

        feedss = document.getElementById("fee");

        let out = "";

        accessData.data.forEach(user => {

          

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

    </div>        `
        });

        feedss.innerHTML = out;

    });
}
postCall(range)
// var post=10;
// postCall();
// window.onscroll = function()
// {
//    var scrollHeight, totalHeight;
//    scrollHeight = document.body.scrollHeight;
//    totalHeight = window.scrollY + window.innerHeight;

//    if(totalHeight >= scrollHeight)
//    {
       
//        post += post+10;
//        console.log(post);
//     postCall(post);
//    }
// }

