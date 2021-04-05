/*
*  Author: Nancy Escobedo nescobedo@csumb.edu
* created: April 3, 2021
* License: Public Domain
*/

/******************************************************************************/
//from lab14
// Create a constructor for vehicles called Vehicle, including make, model,
//year, color, and extras.
// function Vehicle (make,model, year, color, extras){
// 	this.company = make;
// 	this.model = model;
// 	this.year = year;
// 	this.color = color;
// 	this.extras = extras;
// 	// Add a method info() to your constructor that neatly returns a string with
// 	//all that information
// 	this.info = function(){
// 		return this.color + "  " + this.year + "  " + this.make + "  " + this.model
// 		+ "   " + this.extras;
// 	}
// }

//From Wes Modes : // This is the NEW class method
//
// class Vehicle {
//   constructor(make, model, year, color, extras, name) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.extras = extras;
//     this.name = name;
//   }
//   info() {
//     return this.color + " " + this.year + " " + this.make + " " +  this.model +
// 		" with " +  this.extras + " called " + this.name;
//   }
// }
// //create an array called vehicles to put our vehicles in
// var vehicles = [];
// //var newVehicle = new Vehicle ("Toyota", "Highlander", 2007, "Black", "Hybrid");
// //vehicles.push(newVehicle);
// vehicles.push(new Vehicle("Toyota", "Highlander", 2007, "Black", "Hybrid"));
// vehicles.push(new Vehicle("Toyota", "Corrolla", 1999, "White", "very small"));
// // Instantiate objects with your constructor for every vehicle you've ever owned:
// // For each instantiated object, call your method info() and output the results
// //to your output div. Here's a reminder:
// // we add text (including <p> tags to the end of our output div
// // document.getElementById("output").innerHTML += "<p>" + bike.info() + "</p>";
// outputEl = document.getElementById("output");
// for(var i = 0; i<vehicles.length; i++){
// 	var newEl = document.createElement("li");
// 	newEl.innerText = vehicles[i].info();
// 	outputEl.appendChild(newEl);
// }

/******************************************************************************/
//Hangman Game:

//pseeudocode from a previous lab:

  //Come up with a word at random
  // Display the length of the word to the user
  // Correct_guesses is less than the length of the word
    // Tell the user to guess a letter
      // If the user guesses a correct letter, then user earns a point for correct_guesses
      // If the user guesses an incorrect letter, then the user earns a point for incorrect_guesss and draw the next part of hangman.
  // If the users incorrect_guesses are greater than 8, then the user has lost the game
  // If the users correct_guesses are equal to the length of the word, then the user has won the game

//updated pseeudocode:

  //initialize
    // create a list of words
		// pick a random word from the list
    // Display the length of the randomWord to the user with "_"
		// display the # of guesses to the user, guesses = 8

	//play
	  //loop until player guesses the word or until player runs out of guesses
		// Tell the user to guess a letter
      //if the user guesses the wrong letter, then # of guesses decreases
          //add the wrong letter to guessed list
          //check if the user has guessed the letter, notify user letter has been guessed.
      //if the user guesses the right letter, then # of guesses does not decrease

	//check for victory
			// If the user guesses a correct word before guesses runs out, user WINS
			// If the user guesses reaches the guesses to 0, then the user has lost the game
