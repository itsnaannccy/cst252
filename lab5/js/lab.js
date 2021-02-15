/*
*  Author: Nancy Escobedo nescobedo@csumb.edu
* created:
* License: Public Domain
*/


// Define variables
var make = "Toyota";
var model = "Highlander";
var color = "Black";
var year = 2007;
var ownIt = true;
// calculate
var age = new Date().getFullYear() - year;

//output
document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Age: " + age + "<br>");
document.writeln("Own it? " + ownIt + "<br>");
