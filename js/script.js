{
// === Rock-Paper-Scissors — wersja z GUI ===
// (printMessage & clearMessages są w js/functions.js)

const getMoveName = function (moveId){
  if (moveId == 1) return 'kamień';  
  if (moveId == 2) return 'papier'; 
  if (moveId == 3) return 'nożyce'; 

  printMessage('Nie znam ruchu o id ' + moveId + '.');
  return 'nieznany ruch';
}

const displayResult = function (compMove, playerMove){
  printMessage('Zagrałem ' + compMove + ', a Ty ' + playerMove + '.');

  if(compMove == playerMove){
    printMessage('Remis!');                     
    return;
  }
  if(
    (compMove == 'kamień'  && playerMove == 'papier') ||
    (compMove == 'papier'  && playerMove == 'nożyce') ||
    (compMove == 'nożyce' && playerMove == 'kamień')
  ){
    printMessage('Wygrywasz!');              return;
  }
  if(compMove === 'nieznany ruch' || playerMove === 'nieznany ruch'){
    printMessage('Zły ruch – spróbuj ponownie');
    return;
  }
  printMessage('Tym razem przegrywasz :(');
};

/* ---------- main engine ---------- */
const playGame = function (playerInput){                
  clearMessages();                             

  const randomNumber = Math.floor(Math.random()*3+1);
  const computerMove = getMoveName(randomNumber);   
  const playerMove   = getMoveName(playerInput);    

  displayResult(computerMove, playerMove);          
}

/* ---------- button listeners ---------- */
const rockBtn = document.getElementById('play-rock');  
const paperBtn = document.getElementById('play-paper');   
const scissorsBtn = document.getElementById('play-scissors');

  rockBtn.addEventListener('click', () => playGame(1));
  paperBtn.addEventListener('click', () => playGame(2));
  scissorsBtn.addEventListener('click', () => playGame(3));
}