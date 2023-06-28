import tmi from 'tmi.js';
import {
  checkNumber, checkUserBlamed, gameStatus, resetGame, updateUI, checkMaxScore,
} from '../game/game';

export const client = new tmi.Client({
  channels: ['rothiotome'],
});

client.on('message', (channel, tags, message) => {
  const userMessage = message.toString().trim();
  const userName = tags['display-name'];

  if ((/^\d+$/.test(message))) {
    console.log(`${userName}: ${userMessage}`);
    const number = checkNumber(userMessage, gameStatus.number);

    console.log(`number: ${number}`);
    if (number) {
      gameStatus.number = number;
	  checkUserBlamed(userName);
    } else {
      checkUserBlamed(userName);
      gameStatus.status = false;
      resetGame();
    }
    checkMaxScore();
    updateUI();
  }
});

export default client;
