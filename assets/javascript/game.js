$(document).ready(function(){
    // computer generates random number
   var random = Math.floor(Math.random() * 100 + 1)

   $("#number-to-match").text(random);

// generate a random number for each crystal

    var redCrystal = Math.floor(Math.random() * 10 + 1)
    var blueCrystal = Math.floor(Math.random() * 10 + 1)
    var yellowCrystal = Math.floor(Math.random() * 10 + 1)
    var greenCrystal = Math.floor(Math.random() * 10 + 1)

// variables to keep score of wins, losses, playertotal

    var wins = 0;
    var losses= 0;
    var playerTotal=0;

$("#wins").text(wins);
$("#losses").text(losses);

// To reset the Game

function reset(){

    random = Math.floor(Math.random() * 100 + 1)
    $("#number-to-match").text(random);


    var redCrystal = Math.floor(Math.random() * 10 + 1)
    var blueCrystal = Math.floor(Math.random() * 10 + 1)
    var yellowCrystal = Math.floor(Math.random() * 10 + 1)
    var greenCrystal = Math.floor(Math.random() * 10 + 1)

    playerTotal = 0;

    $("#totalscore").text(playerTotal);

}

//  to win the game

function win(){

    alert( "you win!")
    wins++
    $("#wins").text(wins);
    reset();
}

// to lose the game

function lose(){
    alert("you lose")
    losses++
    $("#losses").text(losses)
    reset();
}

// when crystals are clicked


$(".red").click(function(){

    playerTotal = playerTotal + redCrystal;
    $("#totalscore").text(playerTotal);

    if(playerTotal === random){
    win();
    } else if (playerTotal > random){

        lose();
    }

});

$(".blue").click(function(){
    playerTotal = playerTotal + blueCrystal;
    $("#totalscore").text(playerTotal);

    if(playerTotal === random){
        win();
    } else if(playerTotal > random){
        lose();
    }
});

$(".yellow").click(function(){
    playerTotal = playerTotal + yellowCrystal;
    $("#totalscore").text(playerTotal);

    if(playerTotal === random){
        win();
    } else if(playerTotal > random){
        lose();
    }
});

$(".green").click(function(){
    playerTotal = playerTotal + greenCrystal;
    $("#totalscore").text(playerTotal);

    if(playerTotal === random){
        win();
    } else if(playerTotal > random){
        lose();
    }
});


});