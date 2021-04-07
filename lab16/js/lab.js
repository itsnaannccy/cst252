/*
*  Author: Nancy Escobedo nescobedo@csumb.edu
* created: April 6, 2021
* License: Public Domain
*/

/******************************************************************************/
// Create a <button> element (in jQuery, NOT In your HTML).
// Give it a text label
// Add it to your output div
$("#output").append("<button id=button> Press Me");
// Add a click event to it that will bring up an alert
$("#button").click(function(){
    alert("Thanks for visiting");
})
// Restyle the button with jQuery so it is a pleasant green.
$("#button").css("background-color","DarkSeaGreen");
$("#button").css("margin","5px");

/******************************************************************************/
// //taskx:bonus
// // Make a button that changes another button's color and vice versa.
// // Pressing the button should make the color change back to default.
// $("#output").append("<button id=color-button> Press Me");
//  $("#color-button").css("background-color","PaleTurquoise");
//
// $("#button").css("margin","5px");
//
// $("#output").append("<button id=c-button>Just Here");
//  $("#c-button").css("background-color","DarkCyan");
//
// //$("#color-button").css("background-color","PaleTurquoise");
// $("#color-button").click(function(){
//     $("#c-button").css("background-color","PaleTurquoise");
//     $("#color-button").css("background-color","DarkCyan");
// })
// $("#button").css("margin","10px");
// $("#c-button").click(function(){
//     $("#color-button").css("background-color","PaleTurquoise");
//     $("#c-button").css("background-color","DarkCyan");
//     // $("#color-button").css("background-color","DarkCyan");
// })



/******************************************************************************/
