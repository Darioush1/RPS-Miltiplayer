var userInput1 = '';
var userInput2 = 'S';
var winsPlayer1 = 0;
var lossesPlayer1 = 0;
var ties = 0;
var winsPlayer2 = 0;
var lossesPlayer2 = 0;
var ties = 0;

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
var database = firebase.database()

var player1Log = {
    player1: userInput1
}

//update wins and losses
function updateScore() {
    $('.winsPlayer1').text(winsPlayer1);
    $('.lossesPlayer1').text(lossesPlayer1);
    $('.tiesPlayer').text(ties);
    $('.winsPlayer2').text(winsPlayer2);
    $('.lossesPlayer2').text(lossesPlayer2);
};


// function pickR() {
//     console.log('Player picks rock')
// };

// function pickP() {
//     console.log('Player picks paper')
// };

// function pickS() {
//     console.log('Player picks scissors')
// };

$(document).ready(
    updateScore()
);

$('.playRock').on('click', function () {
    userInput1 = 'R';
    //pickR();
    rpsGame()
});

$('.playPaper').on('click', function () {
    userInput1 = 'P';
    //pickP();
    rpsGame();
});

$('.playScissors').on('click', function () {
    userInput1 = 'S';
    //pickS();
    rpsGame();
});



function rpsGame() {
    if (userInput1 === 'R' && userInput2 === 'S') {
        winsPlayer1++;
        lossesPlayer2++;
        updateScore();
        localStore();
    } else if (userInput1 === 'S' && userInput2 === 'S') {
        winsPlayer1++;
        lossesPlayer2++;
        updateScore();
        localStore();
        console.log('scissors')
    } else if (userInput1 === 'P' && userInput2 === 'S') {
        winsPlayer1++;
        lossesPlayer2++;
        updateScore();
        localStore();
        console.log('paper')
    }
};



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
