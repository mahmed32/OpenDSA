"use strict";
/*global alert: true, awardCompletionCredit, getAVName */
(function ($) {
  // Declare and initialize state variables
  var
    keyValue = $('#keyvalue').val();
  // Convenience function for writing output messages
  var tell = function (msg) { $('p[class="output"]').html(msg); };

  // Validate Table size field
  function CheckKey() {
    keyValue = $('#keyvalue').val();
  }

  // Main action: Result of clicking "Calculate" button
  function Calculate() {
    var i;
    var output = 0;
    for (i = 0; i < keyValue.length; i++) {
      output += keyValue.charCodeAt(i);
    }
    tell('<br/>' + output);
    awardCompletionCredit(getAVName());
  }

  // Action callbacks for form entities
  $('#keyvalue').focusout(CheckKey);
  $('#calculate').click(Calculate);
}(jQuery));
