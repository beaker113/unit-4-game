$(document).ready(function() {

  var randomNumber = Math.floor((Math.random() * 120) + 19);
console.log(randomNumber)
  

  var crystal1 = Math.floor((Math.random() * 12) + 1);

  var crystal2 = Math.floor((Math.random() * 12) + 1);

  var crystal3 = Math.floor((Math.random() * 12) + 1);

  var crystal4 = Math.floor((Math.random() * 12) + 1);

  var score = 0;

  var wins = 0;
  
  var loss = 0;




$("#rand").append(randomNumber); 

  $("#crystal1").on("click", function() {
     score + crystal1;
     $("#score").append(score);
  });
    
  
$("#crystal2").on("click", function() {
  score + crystal2;
  $("#score").append(score);
});

$("#crystal3").on("click", function() {
  score + crystal3;
  $("#score").append(score);
});
$("#crystal4").on("click", function() {
  score + crystal4;
  $("#score").append(score);
});


if (score === randomNumber) {
  wins++;
}

if(score > randomNumber) {
  loss++;
}
   
   

 
});
