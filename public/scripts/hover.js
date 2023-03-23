$(document).ready(function() {
  console.log("hi its hover");
  $(".tweetActions i").hover(function() {
    $(this).addClass("hovered");
  }, function() {
    $(this).removeClass("hovered");
  });
});