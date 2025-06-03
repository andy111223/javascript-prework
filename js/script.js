/* ======= ETAP 1: ruch komputera ======= */
clearMessages();

/* losuj liczbę 1-3 */
let randomNumber = Math.floor(Math.random() * 3 + 1);

/* zamień liczbę na tekst ruchu */
let computerMove = 'nieznany ruch';
if (randomNumber == 1) {
  computerMove = 'kamień';
} else if (randomNumber == 2) {
  computerMove = 'papier';
} else if (randomNumber == 3) {
  computerMove = 'nożyce';
}

printMessage('Komputer wylosował: ' + computerMove);
