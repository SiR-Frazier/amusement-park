$(document).ready(function() {
  var age = parseInt(prompt("Welcome to Wonderland! How old are you?"));
    console.log(age);
    if (age >= 18) {
      alert("Enjoy the rides!");
      $("#rides").show();
    } else {
      alert("Sorry, kiddo!");
    };
});
