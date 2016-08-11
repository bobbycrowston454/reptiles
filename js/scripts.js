$(document).ready(function() {

  $("#animal").change(function() {
    var animal = $("#animal").val();

    $(".turtle1").hide();
    $(".snake1").hide();
    $(".crocodile1").hide();
    $(".lizard1").hide();

    if (animal === 'turtle') {
      $('.turtle1').show();
    }else if (animal === 'snake') {
      $('.snake1').show();
    }else if (animal === 'crocodile') {
      $('.crocodile1').show();
    }else{
      $('.lizard1').show();
      }
    console.log(animal);
  });
});
