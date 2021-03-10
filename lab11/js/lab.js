/*
*  Author: Nancy Escobedo nescobedo@csumb.edu
* created: March 9, 2021
* License: Public Domain
*/

// Create a function sortingHat()
// that takes a string as an argument: function sortingHat(str)
  function sortingHat(str){
// counts the letters in str and assigns it to a variable len
      var len = str.length;
// uses modulus (% operator) to get the remainder with 4: mod = len % 4;
// mod will now be a value between 0 and 3
      var mod = len % 4;
// create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and
// Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
      if (mod == 0 ) {
        return "Gryffindor!"
      }
      else if (mod == 1 ) {
        return "Ravenclaw!"
      }
      else if(mod == 2 ) {
        return "Slytherin!"
      }
      else {
        return "Hufflepuff!"
      }
  }

var buttonEl = document.getElementById("button");
// Create an event listener attached to #button
buttonEl.addEventListener("click", function(){
    // that gets the value of #input and assigns it to a variable name
    var name = document.getElementById("input").value;
    // runs sortingHat(name) and stores the result in a variable house
    var house = sortingHat(name);
    // appends a new styled paragraph to #output that says "The Sorting Hat has
    // sorted you into " + house
    document.getElementById("output").innerText = "The sorting Hat has sorted you into  " + house;
})

/******************************************************************************/
/******************************************************************************/
// var buttonEl = document.getElementById("my-button");
// var inputEl = document.getElementById("user-name");
// var outputEl = document.getElementById("output");
//
//
// buttonEl.addEventListener("click", function(){
//  // declare a variable userName and use window.prompt() to get the user's name from the user.
//    var userName = inputEl.value;
//    console.log("userName = ", userName);
//  // Sort the letters of the user's name and return those from the function.
//    //convert userName to an array
//    var nameArray = userName.split('');
//    console.log("nameArray = ", nameArray);
//    //reverse to array
//    var sortNameArray = nameArray.sort();
//    console.log("sortNameArray = ", sortNameArray);
//    //convert the array back to a string
//    var nameSorted = sortNameArray.join('');
//    console.log("nameSorted = ", nameSorted);
//    //return the new string
//    // return nameSorted;
//
//    outputEl.innerText = "Hello, " + nameSorted;
//    inputEl.value = "";
//  })
/******************************************************************************/
/******************************************************************************/
