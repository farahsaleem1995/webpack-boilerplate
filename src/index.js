import './sass/main.scss';

const heading = document.createElement('h1');
heading.textContent = 'Webpack Boilerplate!';

const p = document.createElement('p');
p.textContent = 'Website bundled using Webpack 5.';

const app = document.querySelector('#root');
app.append(heading);
app.append(p);
