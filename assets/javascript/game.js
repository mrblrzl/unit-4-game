//Set up nested properties to utilize each crystal's ID element to assign different values for each on click
//event ...  
var crystal = {
    blue: {
        name: "Blue",
        value: 0
    },
    orange: {
        name: "Orange",
        value: 0
    },
    red: {
        name: "red",
        value: 0
    },
    green: {
        name: "green",
        value: 0
    },
}

var wins = 0;
var losses = 0;
//Random Number generated for target score between 19 - 120 //
var targetNumber = Math.floor(Math.random() * ((120 - 19) + 1)) + 19;
//ID element from HTML
$("#number-to-guess").text(targetNumber);

var counter = 0;
//Random Number generated for crystal values between 1 - 12 //
var numberOptions = Math.floor(Math.random() * (12 - 1) + 1);
var increment = numberOptions;

$(".crystal-image").on("click", function () {
    // Increase the counter by number Random Number generated each time the user clicks
    counter += increment;
    // new counter value each time the crystal is clicked
    $("#totalScore").text(counter);

    if (counter === targetNumber) {
        // If the numbers match the user win
        alert("You win!");
        // Tallies the number of wins
        wins++;
        $("#wins").text(wins);
    }

    else if (counter >= targetNumber) {
        // Else alerted with a loss
        alert("You lose!");
        // Tallies the number of losses
        losses++;
        $("#losses").text(losses);
    }
});

//insert reset function