/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
  "ENTER": 13,
  "LEFT": 37,
  "UP": 38,
  "RIGHT": 39,
  "DOWN": 40
}
  // Game Item Objects
var positionX = 0;
var positionY = 0;
var speedX = 5;
var speedY = -5;


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
      repositionGameItem
      redrawGameItem
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
      if (event.which === KEY.ENTER) {          
          console.log("enter pressed");
      }
      else if (event.which === KEY.LEFT){
          speedX === -5;
          console.log("left pressed");
      }
      else if (event.which === KEY.UP){
          speedX === -5;
            console.log("up pressed");
      }
      else if (event.which === KEY.RIGHT){
          speedX === +5;
            console.log("right pressed");
      }
      else if (event.which === KEY.DOWN){
          speedX === +5;
            console.log("down pressed");
      }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function repositionGameItem(){
      positionX += speedX;
      positionY += speedY;

  }

  function redrawGameItem() {
      $("#gameItem").css("left", positionX);

  }
  
}
