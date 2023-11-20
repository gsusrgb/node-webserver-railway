require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use( express.static('public'));

/*app.get('/', function (req, res) {
  res.send('Home Page')
});*/

/*app.get('/hola-mundo', function (req, res) {
    res.send('Hola Mundo en su respectiva ruta')
});*/

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Gsus',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Gsus',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Gsus',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/elements.html');
});

app.get('/*', function (req, res) {
    //res.send('404 | Page not found')
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Examen app listening at http://localhost:${port}`);
});

//app.listen(8080)