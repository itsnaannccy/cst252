/*
* Author: Nancy Escobedo nescobedo@csumb.edu
* created: April , 2021
* License: Public Domain
*/

// Read the docs at https://xkcd.com/json.html
// Try the API in the browser, e.g., https://xkcd.com/info.0.json
// Use $.ajax() method to retrieve the data in an variable called data
// Process the parts and add them to your webpage with the appropriate tags.
      // Give the section a title using the data.title key from the object
      // Create an image tag using the data.img key from the object
      // Give the image an alt attribute using the data.alt key from the object
//1st attempt
    // $.ajax({
    //     url: "https://xkcd.com/info.0.json",
    //     method: "GET",
    //     success: function(data){
    //       console.log(data);
    //       $("h3").html(data.title);
    //       // var newImage = $("<img>");
    //       // newImage.attr("src",data.img);
    //       // $("#output").append(newImage);
    //       // $("#output").html(data.alt);
    //     }
    // })

//2nd attempt with the help of wes's code
    var URL = "https://xkcd.com/info.0.json";

  var URLpre = "https://xkcd.com/";
  var URLpost = "info.0.json";

  // Endpoint format: http://xkcd.com/614/info.0.json

  // a helper function to turn single and double quotes into
  // html symbols so they don't confuse html tags
  //
  function make_safe(str) {
    return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
  }

  function getComic(num) {
    if (typeof num === 'undefined') {
      numStr = "";
    } else {
      numStr = num.toString() + "/";
    }
    var ourURL = URLpre + numStr + URLpost;
    console.log("Our new URL:", ourURL);
    // get data via ajax from numbersapi
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (ENDPOINT)
        url: ourURL,
        // Whether this is a POST or GET request
        type: "GET",
    })
    // If the request succeeds
    .done(function(data) {
        // console.log(data);
        var imageUrl = data.img;
        // we use .replace(/"/g, '\\"') after the text strings because
        // sometimes there are single and double quotes in the text
        // that confuses the html
        var title = data.title;
        console.log("orig title:", title);
        title = make_safe(title);
        console.log("safe title:", title);
        var alt = data.alt;
        console.log("orig alt:", alt);
        alt = make_safe(alt);
        console.log("safe alt:", alt);
        var comicNum = data.num;
        var html = `<div id="imageblock">
            <h2>${title}</h2>
            <img src="${imageUrl}" title="${alt}"><br>
            <button id="prev">Previous</button><button id="next">Next</button>
          </div>`
        // console.log("My new html: \n", html);
        $("#output").html(html);

        // add event listener to new prev button
        $("#prev").click(function(){
          getComic(comicNum - 1);
        });
        // add event listener to new next button
        $("#next").click(function(){
          getComic(comicNum + 1);
        });
    })
    .fail(function(){
      console.log("^^ Please ignore this error. It's okay.");
      console.log("Have a okay day! :-)");
    })

  }

  // start things off
  getComic();
/******************************************************************************/
//taskx
// Adapt this lab to use the NASA Astronomy Picture of the Day (APOD) API instead, including the Previous and Next buttons.
// You will need to register for an api_key (which takes about two seconds) and
// Supply that api_key in your $.ajax call in the data field (see my lecture for this recipe)
// Unlike xkcd, we won't vary the endpoint with APOD.
// When you request an APOD, the $.ajax call will require a date for which you want a picture
// Our prev and next buttons will use the date instead of num

//1st attempt, used in the console and showed up on the webpage
// $.ajax({
//   url:"https://api.nasa.gov/planetary/apod"
//   method:"GET",
//   data: {
//     api_key: "te4lBFjcxvfOjl8SS2YXJ1d3NtrVOV1XouXnFj7n"
//     success: function(data){
//       console.log(data);
//            $("").html(data.title);
//            var newImage = $("<img>");
//            newImage.attr("src",data.img);
//            $("#output").append(newImage);
//            $("#output").html(data.alt);
//     }
//   }
// })

var URL = "https://api.nasa.gov/planetary/apod";
  var URLpost = "info.0.json";

function make_safe(str) {
  return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

function getImg(date) {
  if (typeof date === 'undefined') {
    numStr = "";
  } else {
    numStr = date.toString() + "/";
  }
  var ourURL = URLpre + numStr + URLpost;
  console.log("Our new URL:", ourURL);
  // get data via ajax from numbersapi
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request (ENDPOINT)
      url: ourURL,
      // Whether this is a POST or GET request
      type: "GET",
  })
  // If the request succeeds
  .done(function(data) {
      // console.log(data);
      var imageUrl = data.url;
      // we use .replace(/"/g, '\\"') after the text strings because
      // sometimes there are single and double quotes in the text
      // that confuses the html
      var title = data.title;
      console.log("orig title:", title);
      title = make_safe(title);
      console.log("safe title:", title);
      var explanation = explanation.alt;
      console.log("orig alt:", alt);
      explanation = make_safe(alt);
      console.log("safe alt:", alt);
      var dateNum = date.date;
      var html = `<div id="imageblock">
          <h2>${title}</h2>
          <img src="${imageUrl}" title="${explanation}"><br>
          <button id="prev">Previous</button><button id="next">Next</button>
        </div>`
      // console.log("My new html: \n", html);
      $("#output").html(html);

      // add event listener to new prev button
      $("#prev").click(function(){
        getComic(dateNum - 1);
      });
      // add event listener to new next button
      $("#next").click(function(){
        getComic(dateNum + 1);
      });
  })
  .fail(function(){
    console.log("^^ Please ignore this error. It's okay.");
    console.log("Have a okay day! :-)");
  })

}

// start things off
getImg();
