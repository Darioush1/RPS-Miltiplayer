var userInput1 = '';
var userInput2 = '';
var winsPlayer1 = 0;
var lossesPlayer1 = 0;
var ties = 0;
var winsPlayer2 = 0;
var lossesPlayer2 = 0;
var ties = 0;
var player1Log;

// fire base config of my database
var firebaseConfig = {
    apiKey: "AIzaSyCojrgn-ezXaxFVLQ6R7iymqAQrdhveRwc",
    authDomain: "rps-multiplayer-2db9a.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-2db9a.firebaseio.com",
    projectId: "rps-multiplayer-2db9a",
    storageBucket: "",
    messagingSenderId: "754616105798",
    appId: "1:754616105798:web:25144df24620c639"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//create an object that will reference the firebase database
var database = firebase.database();



//update wins and losses
function updateScore() {
    $('.winsPlayer1').text(winsPlayer1);
    $('.lossesPlayer1').text(lossesPlayer1);
    $('.tiesPlayer').text(ties);
    $('.winsPlayer2').text(winsPlayer2);
    $('.lossesPlayer2').text(lossesPlayer2);
    database.ref().push(player1Log)
};


$(document).ready(
    updateScore()
);



$('#button').on('click', function () {
    userInput1 = $(this).html();
    database.ref().push({
        Player1Pick: userInput1
    })
    rpsGame();
    
});





//function that updates dom if player 1 wins
function rpsGame() {
    if (userInput1 === 'Rock' && userInput2 === 'Scissors') {
        winsPlayer1++;
        lossesPlayer2++;
        updateScore();
    } else if (userInput1 === 'Scissors' && userInput2 === 'Scissors') {
        ties++;
        updateScore();
    } else if (userInput1 === 'Paper' && userInput2 === 'Scissors') {
        lossesPlayer1++;
        winsPlayer2++;
        updateScore();
    }
};

function databasefunction() {
    let userInput1 = 
    player1Log = {
        player1: userInput1
    };
}



function resetGame() {
    let winsPlayer1 = 0;
    let lossesPlayer1 = 0;
    let ties = 0;
    let winsPlayer2 = 0;
    let lossesPlayer2 = 0;
    $('.winsPlayer1').text(winsPlayer1);
    $('.lossesPlayer1').text(lossesPlayer1);
    $('.tiesPlayer').text(ties);
    $('.winsPlayer2').text(winsPlayer2);
    $('.lossesPlayer2').text(lossesPlayer2);
   
}

$('.resetButton').on('click', function(){
    resetGame();
});
