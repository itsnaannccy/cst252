/*
*  Author: Nancy Escobedo nescobedo@csumb.edu
* created: Febuary 23, 2021
* License: Public Domain
*/

/******************************************************************************/
/******************************************************************************/
// Create a new function in your file, call it what you like, but choose wisely.
  function sortName() {
  // declare a variable userName and use window.prompt() to get the user's name from the user.
    var userName = window.prompt("Please enter your user name:");
    console.log("userName = ", userName);
  // Sort the letters of the user's name and return those from the function.
    //convert userName to an array
    var nameArray = userName.split('');
    console.log("nameArray = ", nameArray);
    //reverse to array
    var sortNameArray = nameArray.sort();
    console.log("sortNameArray = ", sortNameArray);
    //convert the array back to a string
    var nameSorted = sortNameArray.join('');
    console.log("nameSorted = ", nameSorted);
    //return the new string
    return nameSorted;
}
// Outside of the function, call the function and output the results with
//document.writeln() to neatly output the user's sorted name.
  document.writeln("Here is your new sorted username: " + sortName() + "</br");
  document.writeln("Here is your new sorted name: " + revName + "</br>");
/******************************************************************************/
/******************************************************************************/
// Task X: Bonus #5
// Can you make it so window.prompt() happens outside of your functions, then
// pass the name as a parameter to the functions and return the result
  var name = window.prompt("Please enter your name:");
  console.log("name = ", name);

  function sortUserName(str) {
      //convert userName to an array
      var strArray = str.split('');
      console.log("strArray = ", strArray);
      //reverse te array
      // var revSortedArray = strArray.sort().reverse();
      var revSortedArray = strArray.sort();
      console.log("revSortedArray = ", revSortedArray);
      //convert the array back to a string
      var newStr = revSortedArray.join('');
      console.log("newStr = ", newStr);
      //return the new strings
      return newStr;
  }
  // variable called revName to call sortUserName function
    var revName = sortUserName(name);
    // document.writeln("Here is your new name: "+ revName + "</br");
    //the document.writeln above wouln't show up on the webpage, when i moved it
    //above it showed up.

/******************************************************************************/
/******************************************************************************/
