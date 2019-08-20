var userInput1 = '';
var userInput2 = 'S';
var winsPlayer1 = 0;
var lossesPlayer1 = 0;
var ties = 0;
var winsPlayer2 = 0;
var lossesPlayer2 = 0;
var ties = 0;

// Your web app's Firebase configuration
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

var database = firebase.database()



function updateScore() {
    $('.winsPlayer1').text(winsPlayer1);
    $('.lossesPlayer1').text(lossesPlayer1);
    $('.tiesPlayer').text(ties);
    $('.winsPlayer2').text(winsPlayer2);
    $('.lossesPlayer2').text(lossesPlayer2);
};
function pickR() {
    console.log('Player picks rock')
};

function pickP() {
    console.log('Player picks paper')
};

function pickS() {
    console.log('Player picks scissors')
};

$(document).ready(
    updateScore()
);

$('.playRock').on('click', function () {
    userInput1 = 'R';
    pickR();
    rpsGame()
});

$('.playPaper').on('click', function () {
    userInput1 = 'P';
    pickP();
    rpsGame();
});

$('.playScissors').on('click', function () {
    userInput1 = 'S';
    pickS();
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

function localStore(event) {
    // This line prevents the page from refreshing when a user hits "enter".
    console.log("localStore")
    //event.preventDefault();

    // Grab the user input
    var player1Pick = userInput1;
    console.log('Locale storage: ' + player1Pick)
    // Clear absolutely everything stored in localStorage using localStorage.clear()
    localStorage.clear();

    // Store the username into localStorage using "localStorage.setItem"
    localStorage.setItem("Player 1 choice:", player1Pick);
    database.ref().push(player1Pick)

    // And display that name for the user using "localStorage.getItem"
    //$("#greeting").text(localStorage.getItem("name"));
};


