/* 
   Javascript Program to add a card flip functionality to homepage.    
   Programmers: Jacob Huebner
   File Name: js_flipcard.js
*/

// Local Variables
var flippedleft = false;
var flippedright = false;
var flippedtop = false;
var flippedbottom = false;

// Runs when the document starts
$(document).ready(function() {

  // Card flip credit: Hakim El Hattab
  // Manages the card flip
  var card = document.querySelector('.card');
  card.addEventListener( 'click', function() {

    // Grabs html elements
    var thecard = document.getElementById("thecardsize");
    var thebackcard = document.getElementById("thebackcard");

    // Gets the location of the where the user clicked on the card
    var mx = event.clientX - thecard.getBoundingClientRect().left;
    var my = event.clientY - thecard.getBoundingClientRect().top;

    // Gets size of card
    var x = thecard.offsetWidth;
    var y = thecard.offsetHeight;

    // Set boundaries
    var leftside = x/2;
    var rightside = x - (x/2);
    var topside = y/3.5;
    var bottomside = y - (y/3.5);


    //alert("mx: " + mx + "  my: " + my + "  x: " + x + "  y: " + y );
    // Checks if any other direction is already flipped
    var leftcheck = (flippedright || flippedtop || flippedbottom);
    var rightcheck = (flippedleft || flippedtop || flippedbottom);
    var topcheck = (flippedleft || flippedright || flippedbottom);
    var bottomcheck = (flippedleft || flippedright || flippedtop);

    // Flips it in the direction it was clicked
    if((my < topside && !topcheck) || flippedtop){
      thebackcard.classList.toggle('is-flipped-text-top');
      setTimeout(function(){card.classList.toggle('is-flipped-top');},70); 
      if(flippedtop){flippedtop = false;}
      else{flippedtop = true;}
    }
    else if((my >= bottomside && !bottomcheck) || flippedbottom){
      thebackcard.classList.toggle('is-flipped-text-bottom');
      setTimeout(function(){card.classList.toggle('is-flipped-bottom');},70); 
      if(flippedbottom){flippedbottom = false;}
      else{flippedbottom = true;}
    }
    else if((mx < leftside && !leftcheck) || flippedleft){
      card.classList.toggle('is-flipped-left');
      if(flippedleft){flippedleft = false;}
      else{flippedleft = true;}
    }
    else if((mx >= rightside && !rightcheck) || flippedright){
      card.classList.toggle('is-flipped-right');
      if(flippedright){flippedright = false;}
      else{flippedright = true;}
    }

  });

});



