/*
*  Author: Nancy Escobedo nescobedo@csumb.edu
* created: March 14, 2021
* License: Public Domain
*/
// credit = https://www.reddit.com/r/learnprogramming/comments/60k8xn/javascript_print_numbers_inside_div_from_1_to_10/
/******************************************************************************/
// Create a "FizzBuzz" function similar to how we did in class.
// Loop through numbers 1 to 200, listing them as you go
  for (var i=1; i<=200; i++){
    // If the number is a multiple of more than one 3, 5 or 7, it should combine
    // Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5,
    // it should print "FizzBuzz!" and so on.
    if(i % 105 == 0){
    console.log("FizzBuzzBoom!");
    //return "FizzBuzzBoom!"
     document.getElementById("output").innerHTML += i + " - FizzBuzzBoom!" + "<br>";
    }
    else if(i % 15 == 0){
      console.log("FizzBuzz!");
      //return "FizzBuzz!"
      document.getElementById("output").innerHTML += i + " - FizzBuzz!" + "<br>";
    }
    else if(i % 21 == 0){
      console.log("FizzBoom!");
      //return "FizzBoom!"
      document.getElementById("output").innerHTML += i + " - FizzBoom!" + "<br>";
    }
    else if(i % 35 == 0){
      console.log("BuzzBoom!");
      //return "BuzzBoom!"
       document.getElementById("output").innerHTML += i + " - BuzzBoom!" + "<br>";
    }
// If the number is a multiple of 3, if should print "Fizz!"
    else if (i % 3 == 0){
      console.log("Fizz!");
      //return "Fizz!"
      document.getElementById("output").innerHTML += i + " - Fizz!" + "<br>";
    }
// If the number is a multiple of 5, it should print "Buzz!"
    else if (i % 5 == 0){
      console.log("Buzz!");
      //return "Buzz!"
      document.getElementById("output").innerHTML += i + " - Buzz!" + "<br>";
    }
// If the number is a multiple of 7, it should print "Boom!"
    else if (i % 7 == 0){
       console.log("Boom!");
       //return "Boom!"
        document.getElementById("output").innerHTML += i + " - Boom!" + "<br>";
    }
    else {
      console.log(i);
      //return i;
      document.getElementById("output").innerHTML += i + "<br>";
     }

}
// Make it so the output of your program appears in your output div.
//
// Another and probably the better way: For each number within the loop,
//create a new DOM element and append to your output div:
//
// str += "Fizz";
// var newEl = document.createElement("p");
// newEl.innerHTML = str;
// document.getElementById("output").appendChild(newEl);
/******************************************************************************/
