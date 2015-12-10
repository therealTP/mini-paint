$(document).ready(function() {
  var currentColor = '';
  var mode = 'click';
  console.log('Color: ', currentColor, ' Mode: ', mode);

  // when clicking on color buttons, button, change current color to that color
  $('.color-button').each(function() {
    $(this).on('click', function() {
      currentColor = $(this).html().toLowerCase();
      console.log(currentColor);
    });
  });

  // define function to call on .box elements whenever the mode event happens
  var toggleColorClass = function() {
    $(this).toggleClass(currentColor);
  };

  var addColorClass = function() {
    $(this).addClass(currentColor);
  };

  // default: click mode, change color when boxes clicked on;
  $('.box').on(mode, toggleColorClass);

  // when hover-mode button is clicked on:
  $('#hover-mode').on('click', function() {
    // if the current mode is 'click', change to 'mouseenter' and change button status
    if (mode === 'click') {
      mode = 'mouseenter';
      $(this).text('HOVER MODE ON!');
      $('.box').unbind('click').on(mode, addColorClass); // unbind prev click event handler & add new one ofr hover
      alert('now in hover mode! press space to exit.');
    } else if (mode === 'mouseenter') { // if in 'mouseenter, change back to click mode'
      mode = 'click';
      $('.box').unbind('mouseenter').on(mode, toggleColorClass); // .on(mode, toggleColorClass); // unbind prev mouseenter event, add new one for click
      $(this).text('Hover mode off.');
    }
    console.log('New mode: ' + mode);
  });

  $(document).keypress(function(e) {
    if(e.which == 32) {
      mode = 'click';
      $('.box').unbind('mouseenter').on(mode, toggleColorClass); // .on(mode, toggleColorClass); // unbind prev mouseenter event, add new one for click
      $('#hover-mode').text('Hover mode off.');
    }
  });

  // when reset button is pressed, remove all color classes from all boxes, change current color to nothing and back to default click mode
  $('#reset').on('click', function() {
    $('.box').removeClass('yellow red blue green white');
    currentColor = '';
    mode = 'click';
  });
}); // document.ready bracket
