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

/* ======= ETAP 2: ruch gracza ======= */
let playerInput = prompt(
  'Wybierz ruch:\n1 – kamień\n2 – papier\n3 – nożyce'
);

let playerMove = 'nieznany ruch';
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nożyce';
}

printMessage('Twój ruch: ' + playerMove);

/* ======= ETAP 3: kto wygrał? ======= */
if (playerMove == 'nieznany ruch') {
  printMessage('Nieznany ruch – odśwież stronę i spróbuj ponownie.');
} else if (playerMove == computerMove) {
  printMessage('Remis!');
} else if (
  (computerMove == 'kamień'  && playerMove == 'papier')  ||
  (computerMove == 'papier'  && playerMove == 'nożyce') ||
  (computerMove == 'nożyce' && playerMove == 'kamień')
) {
  printMessage('Ty wygrywasz!');
} else {
  printMessage('Komputer wygrywa :(');
}
