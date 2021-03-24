/*
*  Author: Nancy Escobedo nescobedo@csumb.edu
* created: March 23, 2021
* License: Public Domain
*/

/******************************************************************************/
// Create a constructor for vehicles called Vehicle, including make, model,
//year, color, and extras.
function Vehicle (make,model, year, color, extras){
	this.company = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.extras = extras;
	// Add a method info() to your constructor that neatly returns a string with
	//all that information
	this.info = function(){
		return this.color + "  " + this.year + "  " + this.make + "  " + this.model
		+ "   " + this.extras;
	}
}
//create an array called vehicles to put our vehicles in
var vehicles = [];
//var newVehicle = new Vehicle ("Toyota", "Highlander", 2007, "Black", "Hybrid");
//vehicles.push(newVehicle);
vehicles.push(new Vehicle("Toyota", "Highlander", 2007, "Black", "Hybrid"));
vehicles.push(new Vehicle("Toyota", "Corrolla", 1999, "White", "very small"));
// Instantiate objects with your constructor for every vehicle you've ever owned:
// For each instantiated object, call your method info() and output the results
//to your output div. Here's a reminder:
// we add text (including <p> tags to the end of our output div
// document.getElementById("output").innerHTML += "<p>" + bike.info() + "</p>";
outputEl = document.getElementById("output");
for(var i = 0; i<vehicles.length; i++){
	var newEl = document.createElement("li");
	newEl.innerText = vehicles[i].info();
	outputEl.appendChild(newEl);
}

/******************************************************************************/
