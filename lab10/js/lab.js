/*
*  Author: Nancy Escobedo nescobedo@csumb.edu
* created: March 7, 2021
* License: Public Domain
*/

/******************************************************************************/
/******************************************************************************/
var buttonEl = document.getElementById("my-button");
var inputEl = document.getElementById("user-name");
var outputEl = document.getElementById("output");


buttonEl.addEventListener("click", function(){
 // declare a variable userName and use window.prompt() to get the user's name from the user.
   var userName = inputEl.value;
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
   // return nameSorted;

   outputEl.innerText = "Hello, " + nameSorted;
   inputEl.value = "";
 })
/******************************************************************************/
/******************************************************************************/
