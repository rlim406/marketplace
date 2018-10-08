$(document).ready(function() {

// =======================================
// === Get Posts Function and Actioner ===
// =======================================

    function getPosts() {
        $.ajax({
            method: "GET",
            url: "/api/posts/",
        }).then(function(data) {
            var html = '';
            $('#homepage').html(html);
            data.forEach(function(ad) {
               postID = ad.id;
               posttitle = ad.title;
               category = ad.category;
               postdescription = ad.description;
               postprice = ad.price;
               user = ad.userID;
               sold = ad.sold;
               postimageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZciSJH_AN2H-czNXGJFIqgyxy7uN0KhfMTNbTg7mQW277DhCpw";
             
               html = '<div class="row"><div class="col-sm-4 indexImage"><img src="' + postimageURL + '" alt="cottage" width="200" height="200"></div><div class="col-sm-8"><div class="row"><div class="col title">' + posttitle + '</div></div><div class="row"><div class="col description">' + postdescription.slice(0, 250) + '</div></div><br><div class="row"><div class="col category">' + category + '</div></div><div class="row"><div class="col readMore"><button class="readmore" id="' + postID + '">Read More</button></div></div><br><div class="row"><div class="col price">' + postprice + '</div></div></div></div>'

               $('#homepage').append(html);
            });
        });
            
      }

      // Loads Home Page - Get Posts Trigger ===============
      getPosts();
      

    // =======================================
    // ===== Get Ad Function and Listener ====
    // =======================================

    function getAd(id) {
        $.ajax({
            method: "GET",
            url: "/api/posts/" + id,
        }).then(function(data) {
            data.forEach(function(ad) {
               postID = ad.id;
               posttitle = ad.title;
               category = ad.category;
               postdescription = ad.description;
               postprice = ad.price;
               user = ad.userID;
               sold = ad.sold;
               postimageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZciSJH_AN2H-czNXGJFIqgyxy7uN0KhfMTNbTg7mQW277DhCpw";
             
               html = '<div class="row"><div class="col-sm-4 indexImage"><img src="' + postimageURL + '" alt="cottage" width="200" height="200"></div><div class="col-sm-8"><div class="row"><div class="col title">' + posttitle + '</div></div><div class="row"><div class="col description">' + postdescription.slice(0, 250) + '</div></div><br><div class="row"><div class="col category">' + category + '</div></div><div class="row"><div class="col"><button id="goHome">Go Back</button></div></div><br><div class="row"><div class="col price">' + postprice + '</div></div></div></div>'

               $('#homepage').html(html);
            });
        });
            
      }
    // Get Ad Trigger =============== 
    $(document).on('click', '.readMore', function(event){
        getAd(event.target.id);
    })   

    // Go home Trigger
    $(document).on('click', '#goHome', function(){
        getPosts();
    })   

        // Go Home Nav Trigger
        $(document).on('click', '#navHome', function(){
            getPosts();
        })   
    
     

    // =======================================
    // ======== Categories and Filters =======
    // =======================================

//     function categoryFilter () {
//         // filter posts by category
//         $.ajax("/api/posts/" + category, {
//             type: "GET",
//             data: selectAllProducts
//          }).then(function() {
//             console.log("Category successfully displayed");
//             location.reload();
//         }); 
//     }
//     categoryFilter();

//     $('#categoryfilter').click(function(){
//         categoryFilter();
// });

// $('form').submit(function(e){
//         e.preventDefault();
//         categoryFilter();
// });
     
//     function priceFilter () {
//    // filter posts by price 
//         $.ajax("/api/post/" + price, {
//             type: "GET",
//             data: selectAllProducts
//     }).then(function() {
//         console.log("filter by price successful");
//         location.reload();
//         }); 
//     }
//     priceFilter();
//     $('#pricefilter').click(function(){
//         priceFilter();


// $('form').submit(function(e){
//         e.preventDefault();
//         priceFilter();
// });

//     function titleFilter () {
//     // filter posts by title 
//         $.ajax("/api/post/" + title, {
//             type: "GET",
//             data: selectAllProducts
//     }).then(function() {
//         console.log("filter by title successful");
//         location.reload();
//     });
// }
//     titleFilter(); //search filter 
//     $('#search').click(function(){
//         titleFilter();
// });

// $('form').submit(function(e){
//         e.preventDefault();
//         titleFilter();
// });

// }); 

}); 
