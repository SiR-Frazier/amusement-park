$(document).ready(function() {
  var height = parseInt(prompt("Welcome to Wonderland! Are you tall enough for the rides? Please answer in feet."));
    if (height >= 5) {
      alert("Enjoy the rides!");
      $("#rides").show();
    } else {
      alert("Sorry! You must be at least 5 feet tall for all rides.");
    };
});
