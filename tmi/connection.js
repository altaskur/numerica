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

  if (/^\d+$/.test(userMessage)) {
    if (userMessage !== gameStatus.lastUser) {
      const number = checkNumber(userMessage, gameStatus.number);
      if (number) {
        gameStatus.number = number;
      } else {
        gameStatus.status = false;
        resetGame();
      }
      checkUserBlamed(userName);
    }

    checkMaxScore();
    updateUI();
  }
});

export default client;
