import './style.css';
import { Howl } from 'howler';
const trees = document.querySelectorAll('.tree');
const images = {
  treasure: '💰',
  leafs: '🍃',
};

const addTresasue = () =>
  [...trees][Math.floor(Math.random() * [...trees].length)].classList.add(
    'treasure'
  );
addTresasue();

const sound = {
  win: new Howl({
    src: ['https://www.myinstants.com/media/sounds/mlg-airhorn.mp3'],
  }),
  erro: new Howl({
    src: ['https://www.myinstants.com/media/sounds/erro.mp3'],
  }),
};

const winAlert = () =>
  window.confirm('Congratulations you ! win wanna play again?')
    ? window.location.reload()
    : null;

trees.forEach((e) => {
  e.addEventListener('mouseenter', () => {
    const itsTreasure = Object.values(e.classList).includes('treasure');

    if (itsTreasure) {
      e.textContent = images.treasure;
      sound.win.play();
      setTimeout(winAlert, 1);
    } else {
      e.textContent = images.leafs;
      sound.erro.play();
    }
  });
});
