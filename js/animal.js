$(document).ready(function () {
  $("#formRadio").submit(function (event) {
    event.preventDefault();
    $('#cow').hide();
    $('#snake').hide();
    $('#werewolf').hide();
    const animal = $("input:radio[name=animal]:checked").val();
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