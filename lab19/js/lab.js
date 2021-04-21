/*
*  Author: Nancy Escobedo nescobedo@csumb.edu
* created: April 20, 2021
* License: Public Domain
*/

//URL = "https://www.boredapi.com/api/activity/"
//URL = "https://api.kanye.rest/"
//URL = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"


// Add a click event to the button
// When a user clicks the button, use a jQuery AJAX call to fetch output from your API
// Put the output of the AJAX call in the output div.

//var endpoint = "http://numbersapi.com/random/year";
//URL = "https://www.boredapi.com/api/activity/";

// $("#activate").click(function(){
// 	// $("#output").append("<p>Howdy!</p>");
//   // Using the core $.ajax() method
//   $.ajax({
//       // The URL for the request
//       url: URL,
//       // The data to send (will be converted to a query string)
//       data: { },
//       // Whether this is a POST or GET request
//       type: "GET",
//       // The type of data we expect back
//       /* dataType : "json", */
//   })
//   // If the request succeeds
//   .done(function( data ) {
//       console.log(data);
//       $("#output").append("<p>" + data.message);
//   })
//   // // If the request fails
//   // .fail(function( xhr, status, errorThrown ) {
//   //     console.log(errorThrown + " Status:" + status );
//   });



//wes's code credit https://wmodes.github.io/cst252/lab19/index.html
URL = "https://www.boredapi.com/api/activity/"
//  URL = "https://api.kanye.rest/"
//URL = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"

// attach click action to button
$("#activate").click(function(){
    // get data via ajax from numbersapi
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (ENDPOINT)
        url: URL,
        // The data to send (will be converted to a query string)
        // data: { id: 123},
        data: { },
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        // dataType : "json",
    })
    // If the request succeeds
    .done(function(data) {
        console.log(data);
        // put data in webpage
        // $("#output").append("<p>" + JSON.stringify(data));
        $("#output").append("<p>Here's what you should do when you are bored: <b>" + data.activity);
        //$("#output").append("<p>President-elect Kanye says: <b>" + data.quote);
        //$("#output").append("<p>The most stable smart man in the room says: <b>" + data.message);

    })
});
