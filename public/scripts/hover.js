$(document).ready(function() {
  console.log("hi its hover");
  $(document).on("mouseenter", ".tweetActions i", function() {
    $(this).addClass("hovered");
  });
  $(document).on("mouseleave", ".tweetActions i", function() {
    $(this).removeClass("hovered");
  });
});