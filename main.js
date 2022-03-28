/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)

// color palette buttons selector an event listener
let colorPalette = document.querySelectorAll(".palette div");
console.log(colorPalette);

// brush color selector and event listener
let brushColor = document.querySelector(".current-brush");


for (let color of colorPalette) {
  color.addEventListener("click", function () {
    console.log("colorPalette clicked")
    brushColor.classList.replace(brushColor.classList[1], color.classList[1]);
  })
}



let clicked = false;

let mouseUp = document.addEventListener("mouseup", function () {
  clicked = false;
})

let mouseDown = document.addEventListener("mousedown", function () {
  clicked = true;
})



// canvas selector and event listener
let canvas = document.querySelectorAll(".canvas div");

// for mouseenter
for (let square of canvas) {

  square.addEventListener("click", function () {
    square.classList.replace(square.classList[1], brushColor.classList[1]);
    // clicked = false;
  })


  square.addEventListener("mouseenter", function () {
    // console.log("square clicked");
    if (clicked === true) {

      square.classList.replace(square.classList[1], brushColor.classList[1]);
    }
  })
}

let darkModeButton = document.querySelector(".dark-mode-button");
let body = document.querySelector("body");

const changeToDark = darkModeButton.addEventListener("click", function(){
  body.classList.toggle("dark-mode");
})







// for square being clicked
// for (let square of canvas){
//   square.addEventListener("click", function(){
//     // console.log("square clicked");
//     square.classList.replace(square.classList[1], brushColor.classList[1]);

//   } )
// }








/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.



/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above
