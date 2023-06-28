import { updateUI } from './game/game';
import './style.css';
import { client } from './tmi/connection';

document.querySelector('#app').innerHTML = /* HTML */`
  <section class="game">
    <header>Max Score: <i class="maxScore"></i> </header>
    <main class="score"></main>
    <footer class="user"></footer>
  </section>
`;

updateUI();
client.connect();
