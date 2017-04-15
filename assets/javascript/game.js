//Declare Variables
//Number between 1 and 120
var targetNumber = Math.floor(Math.random() * 120) + 1;

var score = 0;
var wins = 0;
var losses = 0;

//Send Random number to target score.
$("#targetScore").text(targetNumber);

//Set values for each crystal.
$("img").each(function() {
	$(this).attr("value", Math.floor(Math.random() * 12) + 1); 
	}
);



$(document).ready(function() {
	

//Update Page with Number to guess
   	function initialize() {
 		targetNumber = Math.floor(Math.random() * 120) + 1;
 		$("#targetScore").text(targetNumber);
 		score = 0;
 		$("#total-score").text(score);
 		$("img").each(function() {
			$(this).attr("value", Math.floor(Math.random() * 12) + 1); 
			}
		);
	 };

	// Click catcher.  Determine value of crystal and add to score.

	$(".gem").on("click", function() {
		var crystalValue = ($(this).attr("value"));
		crystalValue = parseInt(crystalValue);
		score += crystalValue;
		$("#total-score").text(score);

	// Win condition.  Alert then add to wins and reset game.
		if (score === targetNumber) {
			alert("You win!");
			wins++;
			$("#wins-losses").html("<p>Wins: " + wins + "</p><br><p>Losses: " + losses + "</p>");
			initialize();
		}

	//Loss Condition	
		else if (score > targetNumber) {
			alert("You lose!!");
			losses++;
			$("#wins-losses").html("<p>Wins: " + wins + "</p><br><p>Losses: " + losses + "</p>");
			initialize();
		}
	});
	



});

