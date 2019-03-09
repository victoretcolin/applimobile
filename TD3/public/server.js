var express = require('express'); // On charge le module express
var app = express(); // On crée une application express
var mongoose = require('mongoose'); // On charge le module mongoose
var morgan = require('morgan'); // On charge le module morgan
var bodyParser = require('body-parser'); // On charge le module body-parser

app.use(express.static(__dirname + '/public')); // On charge les fichiers qui sont dans le répertoire public
app.use(morgan('dev')); // On affecte le module morgan comme logger de notre application
app.use(bodyParser.urlencoded({'extended':'true'})); // On utilise qs pour analyser les URLs
app.use(bodyParser.json()); // On affecte l'analyseur json à notre application
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

mongoose.connect('mongodb://localhost/ListeaFaire', { useNewUrlParser: true });

var Liste = mongoose.model('Liste', { text: String });

app.get('/', function(req, res) {
  res.sendFile('./public/index.html');
});

app.get('/api/laliste', function(req, res) {
  Liste.find(function(err, laliste) {
    if(err) {
      res.send(err);
    }
    res.json(laliste);
  });
});

app.post('/api/laliste', function(req, res) {
  Liste.create({
    text: req.body.text,
    done: false
  }, function(err, liste) {
    if(err) {
      res.send(err);
    }
    Liste.find(function(err, laliste) {
      if(err) {
        res.send(err);
      }
      res.json(laliste);
    });
  });
});

app.delete('/api/laliste/:liste_id', function(req, res) {
  Liste.deleteOne({
    _id: req.params.liste_id
  }, function(err, liste) {
    if(err) {
      res.send(err);
    }
    Liste.find(function(err, laliste) {
      if(err) {
        res.send(err);
      }
      res.json(laliste);
    });
  });
});

app.listen(8080); // On met l'application en écoute sur le port 8080
console.log("on utilise le port: 8080");
