$(document).ready(function() {

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {
    let $tweet = $(`
    <article class="tweet">
      <header class="tweet-header">
        <div class="nameAndPic">
          <img src="${tweet.user.avatars}"> 
          <h2 class="personName">${tweet.user.name}</h2>
        </div>
        <h2 class="personIgn">${tweet.user.handle}</h2> 
      </header>
      <div class="tweet-content">
        <p>${escape(tweet.content.text)}</p>
      </div>
      <footer class="tweet-footer">
        <!-- <div class="datePosted">${new Date(tweet.created_at)}</div> -->
        <div class="timeago">${timeago.format(tweet.created_at)}</div>
        <ul class="tweetActions">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </ul>
      </footer>
    </article>
  `);
  
    return $tweet;
  };


  const renderTweets = function(tweets) {
  // Clear the tweets container before rendering new tweets
    $('#tweets-container').empty();

    // Loop through each tweet and render it using the createTweetElement function
    for (let tweet of tweets) {
    //how it grabs the data
      let $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    }
  };

  const loadTweets = function() {
    $.ajax({
      url:'/tweets',
      method: 'GET',
      dataType: 'json',
      success:function(response) {
        renderTweets(response);
      }
    });
    console.log("loadTweets is working");
  };
  loadTweets();

  $("form").submit(function(event) {
    event.preventDefault();
    let formData = $(this).serialize();
    const errorMessage = document.getElementById("ErrorMessage");
    if (formData.length > 145) {
      $("#ErrorMessage").slideDown();
      return;
    }
    console.log(formData);
    if (formData === "") {
      $("#ErrorMessage").slideDown();
      return;
  
    }
    $.ajax({
      method: "POST",
      data: formData,
      url: "/tweets",
      success:function(response) {
        loadTweets();
      },
      error: function(textStatus, errorThrown) {
        $("#ErrorMessageNoText").slideDown();

      }
  
    });
    errorMessage.style.display = "none";
  });


});


