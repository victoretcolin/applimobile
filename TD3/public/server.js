var express = require('express'); // On charge le module express
var app = express(); // On crée une application express
var morgan = require('morgan'); // On charge le module morgan
var bodyParser = require('body-parser'); // On charge le module body-parser

app.use(express.static(__dirname + '/public')); // On charge les fichiers qui sont dans le répertoire public
app.use(morgan('dev')); // On affecte le module morgan comme logger de notre application
app.use(bodyParser.urlencoded({'extended':'true'})); // On utilise qs pour analyser les URLs
app.use(bodyParser.json()); // On affecte l'analyseur json à notre application
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.listen(8080); // On met l'application en écoute sur le port 8080
console.log("on utilise le port: 8080");
