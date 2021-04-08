import './sass/main.scss';

class Game {
  name = 'Webpack 5 Game';
}

const myGame = new Game();

const heading = document.createElement('h1');
heading.textContent = 'Webpack Boilerplate!';

const p = document.createElement('p');
p.textContent = `I like ${myGame.name}.`;

const app = document.querySelector('#root');
app.append(heading);
app.append(p);
