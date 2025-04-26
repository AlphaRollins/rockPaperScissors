//resultados

let userScore = 0;
let computerScore = 0;
let draws = 0;

//obtener eleccion del jugador al pulsar un boton en la pagina

document.getElementById("btnRock").addEventListener("click", function () {
  play("piedra");
});
document.getElementById("btnPaper").addEventListener("click", function () {
  play("papel");
});
document.getElementById("btnScissors").addEventListener("click", function () {
  play("tijeras");
});

//logica de la computadora

function getComputerChoice() {
  let piedra = "piedra";
  let papel = "papel";
  let tijeras = "tijeras";
  let compChoice = Math.floor(Math.random() * 3);

  if (compChoice === 0) {
    return piedra;
  } else if (compChoice === 1) {
    return papel;
  } else {
    return tijeras;
  }
}

//funcion para jugar una ronda, toma como parametro la eleccion del usuario, llama la funcion de la computadora para obtener su propia eleccion y despues mostrar el resultado de la ronda en pantalla

function play(userChoice) {
  const pcChoice = getComputerChoice();
  let scoreMessage = "";

  if (userChoice === pcChoice) {
    scoreMessage = "¡Empate! Ambos eligieron " + userChoice;
    draws++;
    document.getElementById("score").style.color = "white";
  } else if (
    (userChoice === "piedra" && pcChoice === "tijeras") ||
    (userChoice === "papel" && pcChoice === "piedra") ||
    (userChoice === "tijeras" && pcChoice === "papel")
  ) {
    scoreMessage = "¡Ganaste! " + userChoice + " vence a " + pcChoice;
    userScore++;
    document.getElementById("score").style.color = "#4caf50";
  } else {
    scoreMessage = "¡Perdiste! " + pcChoice + " vence a " + userChoice;
    computerScore++;
    document.getElementById("score").style.color = "red";
  }

  document.getElementById("score").innerText = scoreMessage;
  updateScore(); // llama la funcion para actualizar la puntuacion
}

//funcion que actualiza la puntuacion del juego en pantalla

function updateScore() {
  document.getElementById("userScore").innerText = userScore;
  document.getElementById("computerScore").innerText = computerScore;
  document.getElementById("empates").innerText = draws;
  document.getElementById("score").style.display = "inline-block";
}