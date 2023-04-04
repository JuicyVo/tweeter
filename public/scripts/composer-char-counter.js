$(document).ready(function() {
  $("textarea").on("input", function() {
    let remainChars = 140 - $(this).val().length;
    $(`#counter`).text(remainChars);

    if (remainChars < 0) {
      $("#counter").addClass("red");
    }
    if (remainChars > 0) {
      $("#counter").removeClass("red");
    }
    
  });

  $("#newTweetForm").submit(function(event) {
    let remainChars = 140 - $("textarea").val().length;
    $("textarea").val("");
    $("#counter").text("140").removeClass("red");
  });




});


