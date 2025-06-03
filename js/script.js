// === Rock-Paper-Scissors — wersja z GUI ===
// (printMessage & clearMessages są w js/functions.js)

function getMoveName(argMoveId){
  if(argMoveId == 1){ return 'kamień';  }
  else if(argMoveId == 2){ return 'papier'; }
  else if(argMoveId == 3){ return 'nożyce'; }
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');

  if(argComputerMove == argPlayerMove){
    printMessage('Remis!');                     return;
  }
  if(
    (argComputerMove == 'kamień'  && argPlayerMove == 'papier') ||
    (argComputerMove == 'papier'  && argPlayerMove == 'nożyce') ||
    (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
  ){
    printMessage('Ty wygrywasz!');              return;
  }
  if(argComputerMove == 'nieznany ruch' || argPlayerMove == 'nieznany ruch'){
    printMessage('Zły ruch – spróbuj ponownie');return;
  }
  printMessage('Tym razem przegrywasz :(');
}

function playGame(playerInput){                // 1-argumentowa „maszyna” gry
  clearMessages();                             // wyczyść wcześniejsze komunikaty

  const randomNumber = Math.floor(Math.random()*3+1);
  const computerMove = getMoveName(randomNumber);   // ruch komputera
  const playerMove   = getMoveName(playerInput);    // ruch gracza

  displayResult(computerMove, playerMove);          // wynik rundy
}

/* ===== listenery 3 przycisków ===== */
document.getElementById('play-rock')    .addEventListener('click', () => playGame(1));
document.getElementById('play-paper')   .addEventListener('click', () => playGame(2));
document.getElementById('play-scissors').addEventListener('click', () => playGame(3));
