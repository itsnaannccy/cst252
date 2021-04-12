/*
*  Author: Nancy Escobedo nescobedo@csumb.edu
* created: April, 2021
* License: Public Domain
*/

/******************************************************************************/
// Add a click event to each button
// In the event code, toggle a new class within the div
// Go into your css and style each of the classes
// Test each button

 //purpose-button (as red)
$("#purpose-button").click(function(){
  console.log($("#purpose-button"));
  $("#purpose-button").toggleClass("purpose"); //(turning blue)
});

 //challenge-button (as blue)
 $("#challenge-button").click(function(){
   console.log($("#challenge-button"));
   $("#challenge-button").toggleClass("challenge"); //(turning yellow)
 });

// result-button (as yellow)
$("#result-button").click(function(){
  console.log($("#result-button"));
  $("#result-button").toggleClass("result"); //(turning red)
});

/******************************************************************************/
//credit https://stackoverflow.com/questions/14200833/jquery-toggling-between-3-classes-initially
// credit http://jsfiddle.net/FSFpZ/
//Make a button that will cycle between several different classes, including invisible.

//selects an element by id "output-button"
$("#output-button").click(function(){
  //within the id "output-button" selects div
  $('div').each(function(){
    // creates an array called classes
    var outputs = ['output1','output2','output3'];
    //adding method on a prototype called classes,
    this.className = outputs[($.inArray(this.className, outputs)+1)%outputs.length];
  });
});
