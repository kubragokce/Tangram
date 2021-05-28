$(function() {

  var currentTemplate = $("#one");
  var currentChoice = $("#1");
  var convert = ["blank", "one", "two", "three", "four", "five", "six","seven","eight","nine"];

  $(document).ready(function(){
    $(".templates").hide();
    currentTemplate.show();
  })

  $(".choices").click(function() {
    currentTemplate.hide();
    currentChoice.removeClass("active");
    currentTemplate = $("#" + convert[($(this).attr("id")).toString()]);
    currentChoice = $(this);
    $(this).addClass("active");
    currentTemplate.show();
  })
})
