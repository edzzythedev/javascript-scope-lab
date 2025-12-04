// Write your solution in this file!
/*
  FLATBURGER RESTAURANT LAB
  This file demonstrates the use of Global, Function, and Block Scope.
*/


// STEP 1: CREATE GLOBAL VARIABLES
// These variables are in the global scope, so they can be accessed and modified by any function or block in this file.

// The 'burgers' array is declared with const because the array itself will not be reassigned, even though its contents will change.
const burgers = ['Hamburger', 'Cheeseburger'];

// The 'featuredDrink' string is declared with let because its value will be reassigned later.
let featuredDrink = 'Strawberry Milkshake';


// STEP 2: CREATE THE addBurger FUNCTION
// This is a function-scoped block of code. It can access global variables but any variables created inside it are local to the function.
function addBurger() {
  // 'newBurger' is a function-scoped variable. It cannot be accessed outside of this function.
  const newBurger = 'Flatburger';

  // We use the .push() method to add the value of newBurger to the global 'burgers' array.
  burgers.push(newBurger);
}


// STEP 3: CREATE THE BLOCK-SCOPED CODE
// The 'if' statement creates a block scope. Code inside these curly braces has its own private scope.
if (true) {
  // 'anotherNewBurger' is a block-scoped variable. It only exists inside this 'if' block.
  const anotherNewBurger = 'Maple Bacon Burger';

  // We use the .push() method to add this block-scoped variable to the global 'burgers' array.
  burgers.push(anotherNewBurger);
}


// STEP 4: CREATE THE changeFeaturedDrink FUNCTION
// This function will access and modify the global 'featuredDrink' variable.
function changeFeaturedDrink() {
  // We reassign the value of the global variable to a new string.
  featuredDrink = 'The JavaShake';
}


// The testing section below is for your own local testing.
// The automated tests on GitHub will call your functions directly to verify they work.
console.log("Initial Burgers:", burgers);
console.log("Initial Featured Drink:", featuredDrink);
console.log(" ");

// The 'if' block runs immediately when the script is loaded.
console.log("After the if block ran:", burgers);

// We call the function to add the 'Flatburger'.
addBurger();
console.log("After calling addBurger():", burgers);

// We call the function to change the featured drink.
changeFeaturedDrink();
console.log("After calling changeFeaturedDrink():", featuredDrink);

console.log(" ");
console.log("Final Menu:");
console.log("Burgers:", burgers);
console.log("Featured Drink:", featuredDrink);