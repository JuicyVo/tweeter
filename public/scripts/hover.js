$(document).ready(function() {
  $(document).on("mouseenter", ".tweetActions i", function() {
    $(this).addClass("hovered");
  });
  $(document).on("mouseleave", ".tweetActions i", function() {
    $(this).removeClass("hovered");
  });

  $(document).on("mouseenter", ".tweet", function() {
    $(this).addClass("tweetHovered");
  });
  $(document).on("mouseleave", ".tweet", function() {
    $(this).removeClass("tweetHovered");
  });

});