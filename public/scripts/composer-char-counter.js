$(document).ready(function() {
  console.log("hi");
  $("textarea").on("input", function() {
    let remainChars = 140 - $(this).val().length;
    $(`#counter`).text(remainChars);

    if (remainChars < 0) {
      $("#counter").addClass("red");
    } 
    if (remainChars >0) {
      $("#counter").removeClass("red");
    }

    $("#btn").on('click', function() {
      console.log(this); //the this word is a ref to button
    });
  
  });

});
