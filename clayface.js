// $( document ).ready(function() {
console.log( "ready!" );

//     $(window).resize(function() {
//   // This will execute whenever the window is resized
//   var h = $(window).innerHeight(); // New height
//   console.log("height: " + $(window).innerHeight)
//   var w = $(window).innerWidth(); // New width
//   console.log("width: " + $(window).innerWidth)
// });
var c=document.getElementById("faceCanvas");
var ctx=c.getContext("2d");

ctx.beginPath();
  ctx.arc(100, 100, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#003300';
  ctx.stroke();

// var radius = 70;
// context.beginPath();
// context.arc(200, 200, radius, 0, 2*Math.PI, false);
// context.fillStyle = 'green';
// context.fill();
// context.lineWidth = 5;
// context.strokeStyle = '#003300';
// context.stroke();
// });
