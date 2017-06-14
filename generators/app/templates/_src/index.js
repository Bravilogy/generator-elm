'use strict';

require('./app.scss');

require('./index.html');

const Elm = require('./Main.elm');
const app = Elm.Main.embed(document.getElementById('main'));
