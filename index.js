// Write your solution in this file!
/*
  FLATBURGER RESTAURANT LAB
  This file demonstrates the use of Global, Function, and Block Scope.
*/


// STEP 1: CREATE GLOBAL VARIABLES
// Variables in the global scope can be accessed from anywhere in the code.

// This is a global array for our burgers.
let burgers = ['Hamburger', 'Cheeseburger'];

// This is a global string for our featured drink.
let featuredDrink = 'Strawberry Milkshake';


// STEP 2: CREATE A FUNCTION THAT USES FUNCTION SCOPE
// Function scope means variables created inside a function are only available inside that function.

function addBurger() {
  // 'newBurger' is a function-scoped variable. It only exists inside this function.
  let newBurger = 'Flatburger';

  // We use the function-scoped variable to add an item to the global 'burgers' array.
  burgers.push(newBurger);
}


// STEP 3: CREATE A BLOCK AND ANOTHER FUNCTION
// Block scope means variables created inside curly braces {} are only available inside those braces.

// The 'if' statement creates a block. Since the condition is true, the code inside will always run.
if (true) {
  // 'anotherNewBurger' is a block-scoped variable. It only exists inside these curly braces.
  const anotherNewBurger = 'Maple Bacon Burger';

  // We use the block-scoped variable to add another item to the global 'burgers' array.
  burgers.push(anotherNewBurger);
}

// This function will change the value of our global 'featuredDrink' variable.
function changeFeaturedDrink() {
  // This function can access and modify the 'featuredDrink' variable because it is in the global scope.
  featuredDrink = 'The JavaShake';
}


// SECTION FOR TESTING AND DEMONSTRATION
// We will call the functions here to see how they change our global variables.

// Let's check the menu before we make any changes.
console.log("Initial Burgers:", burgers);
console.log("Initial Featured Drink:", featuredDrink);
console.log(" ");

// Call the function to add the 'Flatburger'.
addBurger();
console.log("After calling addBurger():", burgers);

// The 'if' block has already run, so the 'Maple Bacon Burger' is already added.
console.log("After the if block ran:", burgers);

// Call the function to change the featured drink.
changeFeaturedDrink();
console.log("After calling changeFeaturedDrink():", featuredDrink);

console.log(" ");
console.log("Final Menu:");
console.log("Burgers:", burgers);
console.log("Featured Drink:", featuredDrink);