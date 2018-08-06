var quotes = [
    {
      quote: "Obi-Wan has taught you well.",
      author: "-Darth Vader"
    },
    {
      quote: "Traveling through hyperspace ain't like dusting crops, farm boy.",
      author: "-Han Solo"
    },
    {
      quote: "It's a trap!",
      author: "-Admiral Ackbar"
    },
    {
      quote: "Do or do not, There is no try",
      author: "-Yoda"
    },
    {
      quote: "You can’t win, Darth. Strike me down, and I will become more powerful than you could possibly imagine.",
      author: "-Obi Wan Kenobi",
    },
    {
      quote: "Why you stuck-up, half-witted, scruffy-looking nerf-herder!",
      author: "-Princess Leia"
    },
    {
      quote: "There is good in him. I've felt it.",
      author: "-Luke Skywalker"
    }
  ];
  
  var currentQuote;
  var currentIdx;
  function getQuote(){
    do{
      var idx = Math.floor(Math.random() * quotes.length);
    }while(currentIdx === idx)
    
    currentQuote = quotes[idx];
    
    currentIdx = idx;
    $('.quote').html(quotes[idx].quote);
    $('.author').html(quotes[idx].author);
    
  }
  
  function getTweet(){
    var quoteToTweet = quotes[currentIdx].quote;
    quoteToTweet = encodeURI(quoteToTweet)
    window.open("https://twitter.com/intent/tweet?text=" + quoteToTweet);
  }
  
  
  $(function(){
      getQuote();
      $('.btn').click(getQuote);
      $('#tweet').click(getTweet);
  });