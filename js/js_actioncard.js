/* 
   Javascript Program to add functionality to the action cards on the homepage.    
   Programmers: Jacob Huebner
   File Name: js_actioncard.js
*/

// Local Variables
var flippedleft = false;
var flippedright = false;
var flippedtop = false;
var flippedbottom = false;

// Runs when the document starts
$(document).ready(function() {

  // ======== Bio action card ========
  $("#bio-action-card").on({  

    mouseenter: function () {
      $(this).addClass('action-grow')
    },
    
    mouseleave: function () {
      $(this).removeClass('action-grow')
    },

    click: function () {
      window.location.href='bio.html';
    } 

  })

  // ======== Project action card ========
  $("#project-action-card").on({  

    mouseenter: function () {
      $(this).addClass('action-grow')
    },
    
    mouseleave: function () {
      $(this).removeClass('action-grow')
    },

    click: function () {
      window.location.href='projects.html';
    } 

  })

  /*
    else if((mx >= rightside && !rightcheck) || flippedright){
      card.classList.toggle('is-flipped-right');
      if(flippedright){flippedright = false;}
      else{flippedright = true;}
    }

  });

  */

});



