$(document).ready(function() {
  var height = parseInt(prompt("Welcome to Wonderland! Are you tall enough for the rides? Please answer in feet."));
  var age = parseInt(prompt("Thanks! Now please enter your age to see available rides."));

    if ((height >= 5) && (age >= 13)) $("#wheel").show();
    if ((height >= 5) && (age >= 15)) $("#coaster").show();
    if ((height < 5) && (age < 13)) $("#kiddie").show();
    if (height >= 5) $("#bumper").show();
});
