$(document).ready(function () {
  $("#formRadio").submit(function (event) {
    event.preventDefault();
    const animal = $("input:radio[name=animal]:checked").val();
    
    // Business logic:
    
    // Hides previous section
    $('#cow').hide();
    $('#snake').hide();
    $('#werewolf').hide();
    
    
    
    // Determines which section to show based on radio input
    if (animal === "cow") {
      $('#cow').show();
    } else if (animal === "snake") {
      $('#snake').show();
    } else if (animal === "werewolf") {
      $('#werewolf').show();
    } else {
    }
  });
});