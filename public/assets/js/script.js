/**
 * This is the main client code.
 * JQuery 3.1.1
 *
 * @author     Mattia Corvaglia <corvagliamattia@gmail.com>
 * @see        http://www.mattiacorvaglia.com
 * @version    1.0.0
 * @since      1.0.0
 * @copyright  2017 Mattia Corvaglia All Rights Reserved.
 * @license    MIT
 */

// Wait for the DOM to be fully loaded
$(document).ready(function() {

  // "Start" button click handler
  $('#start').click(function() {
    // Asynchronous HTTP (Ajax) request
    $.get('/start', function(data, status) {
      $('#out').append('\n'+data);
    });
  });

  // "Stop" button click handler
  $('#stop').click(function() {
    // Asynchronous HTTP (Ajax) request
    $.get('/stop', function(data, status) {
      $('#out').append('\n'+data);
    });
  });

});
