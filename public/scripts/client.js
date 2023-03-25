/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//delete this tweetdata later

$(document).ready(function() {
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

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
        <p>${tweet.content.text}</p>
      </div>
      <footer class="tweet-footer">
        <div class="datePosted">${new Date(tweet.created_at)}</div>
        <ul class="tweetActions">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </ul>
      </footer>
    </article>
  `);
  return $tweet;
}


const renderTweets = function(tweets) {
  // Clear the tweets container before rendering new tweets
  $('#tweets-container').empty();

  // Loop through each tweet and render it using the createTweetElement function
  for (let tweet of tweets) {
    //how it grabs the data 
    let $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
  }
}

// Test / driver code (temporary)
renderTweets(data);

})

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault()
    let formData =$(this).serialize()
    console.log (formData)
    $.ajax({
      method: "POST",
      data: formData, 
      url: "/tweets"
    
    })
  })
})