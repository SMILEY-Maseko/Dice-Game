// Declare player variables and assign default values

let player1 = "Player 1";
let player2 = "Player 2";
let currentScore = 0;
let activePlayer = 1;
const scores = [0, 0];
const goalScore = 100;

// Function to save player names to localStorage
function saveNames() {
  localStorage.setItem("player1", player1);
  localStorage.setItem("player2", player2);
}

// Function to load player names from localStorage
function loadNames() {
  player1 = localStorage.getItem("player1") || "Player 1";
  player2 = localStorage.getItem("player2") || "Player 2";
  document.querySelector("p.player1").innerHTML = player1;
  document.querySelector("p.player2").innerHTML = player2;
}

// Call the function to load names when the page loads
loadNames();

// Function to edit player names
function editNames() {
  player1 = prompt("Change Player 1 Name", player1);
  player2 = prompt("Change Player 2 Name", player2);

  if (player1 && player1.trim().length > 0) {
    player1 = player1;
  } else {
    alert('Please enter a valid name for Player 1');
    return;
  }

  if (player2 && player2.trim().length > 0) {
    player2 = player2;
  } else {
    alert('Please enter a valid name for Player 2');
    return;
  }

   document.querySelector("p.player1").innerHTML = player1;
   document.querySelector("p.player2").innerHTML = player2; 

     // Save the new names to localStorage
  saveNames()
}

// first & second player dice number
let player1Score = Math.floor(Math.random() * 6) + 1;
let player2Score = Math.floor(Math.random() * 6) + 1;

let firstDice = document.querySelector(".img1");
let secondDice = document.querySelector(".img2");

// conditional logic for first dice
if (player1Score === 1) {
  firstDice.setAttribute("src", "images/dice1.png");
} else if (player1Score === 2) {
  firstDice.setAttribute("src", "images/dice2.png");
} else if (player1Score === 3) {
  firstDice.setAttribute("src", "images/dice3.png");
} else if (player1Score === 4) {
  firstDice.setAttribute("src", "images/dice4.png");
} else if (player1Score === 5) {
  firstDice.setAttribute("src", "images/dice5.png");
} else firstDice.setAttribute("src", "images/dice6.png");

// conditional logic for second dice
if (player2Score === 1) {
  secondDice.setAttribute("src", "images/dice1.png");
} else if (player2Score === 2) {
  secondDice.setAttribute("src", "images/dice2.png");
} else if (player2Score === 3) {
  secondDice.setAttribute("src", "images/dice3.png");
} else if (player2Score === 4) {
  secondDice.setAttribute("src", "images/dice4.png");
} else if (player2Score === 5) {
  secondDice.setAttribute("src", "images/dice5.png");
} else secondDice.setAttribute("src", "images/dice6.png");

// displaying results of dice
if (player1Score > player2Score) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (player2Score > player1Score) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else document.querySelector("h1").innerHTML = "It's a draw...";

function saveNames() {
  localStorage.setItem("player1", player1);
  localStorage.setItem("player2", player2);
}

function loadNames() {
  player1 = localStorage.getItem("player1") || "Player 1";
  player2 = localStorage.getItem("player2") || "Player 2";
  document.querySelector("p.player1").innerHTML = player1;
  document.querySelector("p.player2").innerHTML = player2;
}

loadNames();

function editNames() {
  player1 = prompt("Change Player 1 Name", player1);
  player2 = prompt("Change Player 2 Name", player2);

  if (player1 && player1.trim().length > 0) {
    player1 = player1;
  } else {
    alert('Please enter a valid name for Player 1');
    return;
  }

  if (player2 && player2.trim().length > 0) {
    player2 = player2;
  } else {
    alert('Please enter a valid name for Player 2');
    return;
  }

  document.querySelector("p.player1").innerHTML = player1;
  document.querySelector("p.player2").innerHTML = player2; 

  saveNames();
}
//Function for Rolling the dice
function rollDice() {
  const player1Score = Math.floor(Math.random() * 6) + 1;
  const player2Score = Math.floor(Math.random() * 6) + 1;

  const firstDice = document.querySelector(".img1");
  const secondDice = document.querySelector(".img2");

  firstDice.setAttribute("src", `images/dice${player1Score}.png`);
  secondDice.setAttribute("src", `images/dice${player2Score}.png`);

  currentScore += player1Score + player2Score;
  document.getElementById('current-score').textContent = currentScore;
}

function holdScore() {
  scores[activePlayer - 1] += currentScore;
  currentScore = 0;

  document.getElementById(`player${activePlayer}-total-score`).textContent = scores[activePlayer - 1];
  document.getElementById('current-score').textContent = currentScore;

  if (scores[activePlayer - 1] >= goalScore) {
    document.getElementById('result').textContent = `${activePlayer === 1 ? player1 : player2} wins!`;
    disableButtons();
  } else {
    switchPlayer();
  }
}
//functions to switch players
function switchPlayer() {
  activePlayer = activePlayer === 1 ? 2 : 1;
  document.getElementById('result').textContent = `${activePlayer === 1 ? player1 : player2}'s turn!`;
}

function disableButtons() {
  document.querySelector('button[onclick="rollDice()"]').disabled = true;
  document.querySelector('button[onclick="holdScore()"]').disabled = true;
}


// Load initial player names from localStorage
loadNames();

