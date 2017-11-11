'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const burger_route = require('./controllers/burger_controller');
const exphbs = require('express-handlebars');
const port = process.env.PORT || 8000;

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use('/', burger_route);

app.listen(port, () => {
  console.log('App listening on PORT ' + port);
});
