// ===== Papier-kamień-nożyce – wersja z funkcjami =====
clearMessages();                         // czyścimy pole komunikatów

/* ---------- FUNKCJE ---------- */
// zwraca nazwę ruchu na podstawie liczby 1-3
function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
    return 'papier';
  } else if(argMoveId == 3){
    return 'nożyce';
  }  
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

// wyświetla przebieg i wynik rundy
function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');

  if(argPlayerMove == 'nieznany ruch'){
    printMessage('Wpisz 1 (kamień), 2 (papier) lub 3 (nożyce).');
  } else if(argComputerMove == argPlayerMove){
    printMessage('Remis!');
  } else if(
    (argComputerMove == 'kamień'  && argPlayerMove == 'papier') ||
    (argComputerMove == 'papier'  && argPlayerMove == 'nożyce') ||
    (argComputerMove == 'nożyce'  && argPlayerMove == 'kamień')
  ){
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Tym razem przegrywasz :(');
  }
}

/* ---------- GŁÓWNY PRZEBIEG GRY ---------- */
// losowanie ruchu komputera
const randomNumber  = Math.floor(Math.random() * 3 + 1);
const computerMove  = getMoveName(randomNumber);

// wybór gracza (prompt)
const playerInput   = prompt('Wybierz ruch: 1-kamień, 2-papier, 3-nożyce');
const playerMove    = getMoveName(playerInput);

// prezentacja wyniku
displayResult(computerMove, playerMove);
