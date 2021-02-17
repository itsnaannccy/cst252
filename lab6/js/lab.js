/*
*  Author: Nancy Escobedo nescobedo@csumb.edu
* created: Febuary 15,2021
* License: Public Domain
*/

// Define variables
var myTransport = ["Toyota Highlander", " MST Bus", " Bike"];

var myMainRide = {
    make : "Toyota",
    model : "Highlander",
    color : "Black",
    year : 2007,
    ownIt : true,
    // calculate
    age : function() {
      return 2021 - year;
    }
}

//output
document.writeln("Kinds of Transportaion I may use: "+ myTransport + "<br>");
document.writeln("<br>");
document.writeln("My Main Ride: <pre>",JSON.stringify(myMainRide, null, '\t'), "</pre>");
