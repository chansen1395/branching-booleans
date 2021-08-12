$(document).ready(function() {
  
  const age = parseInt(prompt("How old are you?"));
  if (age >= 18) {
    $('#register').show();
  } else {
    $('#tooYoung').show();
  }
});
  
  // if (age > 21) {
    //   $('#register').show();
  // } else if (age === 21) {
  //   alert("Now don't go wild!");
  //   $('#drinks').show();
  // } else {
  //   $("#tooYoung").show();
  // }
