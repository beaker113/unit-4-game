$("#random-button").on("click", function() {
    var randomNum = Math.floor(Math.random() * 1000) + 1; 
    $("#random-number").text(randomNum);
  });
