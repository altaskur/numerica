export const gameStatus = {
  maxScore: 0,
  number: 0,
  lastUser: '',
  status: true,
  intents: 1,
};

export function checkNumber(userNumber, number) {
  const parsedUserNumber = parseInt(userNumber, 10);
  const parsedNumber = parseInt(number, 10) + 1;

  console.log(`user parsed: ${parsedUserNumber} number: ${parsedNumber}`);

  if (parsedUserNumber === parsedNumber) {
    gameStatus.intents = 1;
    return number + 1;
  }
  return false;
}
export function checkMaxScore() {
  if (gameStatus.number > gameStatus.maxScore) gameStatus.maxScore = gameStatus.number;
}
export function resetGame() {
  console.log('Reiniciando juego');
  gameStatus.number = 0;
  gameStatus.status = true;
  gameStatus.intents = 0;
}
export function checkUserBlamed(userName) {
  if (parseInt(gameStatus.intents, 10) !== 0) gameStatus.lastUser = userName;
}
export function updateUI() {
  const maxScore = document.querySelector('i.maxScore');
  const score = document.querySelector('main.score');
  const user = document.querySelector('footer.user');

  maxScore.innerHTML = gameStatus.maxScore;
  score.innerHTML = gameStatus.number;
  user.innerHTML = gameStatus.lastUser;
}
