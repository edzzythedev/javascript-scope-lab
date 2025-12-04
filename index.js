// Write your solution in this file!
/*
  FLATBURGER RESTAURANT LAB
  This file demonstrates the use of Global, Function, and Block Scope.
*/


// STEP 1: CREATE GLOBAL VARIABLES
// 'burgers' is declared using const and initialized with two strings.
const burgers = ['Hamburger', 'Cheeseburger'];

// 'featuredDrink' is declared using let and initialized as a string.
let featuredDrink = 'Strawberry Milkshake';


// STEP 2: CREATE THE addBurger FUNCTION
// This function will add a new burger to the global array.
function addBurger() {
  // Creates a function-scoped variable named newBurger using const.
  const newBurger = 'Flatburger';

  // Uses the .push() method to add newBurger to the burgers array.
  burgers.push(newBurger);
}


// STEP 3: CREATE THE BLOCK-SCOPED CODE
// This if statement runs immediately because its condition is true.
if (true) {
  // Creates a block-scoped variable named anotherNewBurger using const.
  const anotherNewBurger = 'Maple Bacon Burger';

  // Uses the .push() method to add anotherNewBurger to the burgers array.
  burgers.push(anotherNewBurger);
}

// STEP 4: CREATE THE changeFeaturedDrink FUNCTION
// This function will change the value of the global drink variable.
function changeFeaturedDrink() {
  // Changes the value of the featuredDrink variable.
  featuredDrink = 'The JavaShake';
}


// SECTION FOR TESTING AND DEMONSTRATION
// The tests will call your functions to check if they work correctly.
// You can leave this section as is or run it locally to see the output.

console.log("Initial Burgers:", burgers);
console.log("Initial Featured Drink:", featuredDrink);
console.log(" ");

// The 'if' block has already run.
console.log("After the if block ran:", burgers);

// Call the function to add the 'Flatburger'.
addBurger();
console.log("After calling addBurger():", burgers);

// Call the function to change the featured drink.
changeFeaturedDrink();
console.log("After calling changeFeaturedDrink():", featuredDrink);

console.log(" ");
console.log("Final Menu:");
console.log("Burgers:", burgers);
console.log("Featured Drink:", featuredDrink);