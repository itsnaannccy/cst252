/*
*  Author: Nancy Escobedo nescobedo@csumb.edu
* created: Febuary 25, 2021
* License: Public Domain
*/

/******************************************************************************/
/******************************************************************************/
setTimeout(function(){ alert("Hello"); }, 3000);
// Add your working code from your console experiment in your JS file
// Use console.log() to print out your results.

// Create an array of numbers and assign it to a variable.
    var a = [15, 8, 43, 6, 54, 90, 2, 17, 23];
    console.log("My array ", a);
// Create a named function that will take a single parameter, do a calculation on it (sqrt, sqr, addition, etc), and return the result.
    function mult(x){
      return x * 2;
    }

// Test your function with a few different numbers.
// Use map on your array to apply your function to all the numbers in your array.
    var prod = a.map(mult);
    console.log("array after being multiplied: ", prod);

// Now use a new anonymous function with map to do some new operation on each of the numbers in your array.
     var add = a.map(function(x){
      return x += 2;// your new operation on x here
    })
    console.log("array after addition: ", add);
/******************************************************************************/
/******************************************************************************/
