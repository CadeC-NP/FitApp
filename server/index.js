const express = require('express');
const path = require('path');
require('dotenv').config();

const users = require('./controllers/users');
const workouts = require('./controllers/workouts');
const comments = require('./controllers/comments');
const reactions = require('./controllers/reactions');

const app = express();
const port = process.env.PORT || 3000;

console.log(process.env.TEST);

app.use(express.json());
app.use('/public',express.static( __dirname + '/public/'))
app.use(express.static( __dirname + '/../docs/'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(function(req, res, next) {
  const arr = (req.headers.authorization || "").split(" ");
  if(arr.length > 1 && arr[1] != null){
      req.userId = +arr[1];
  }
  next();
});

app.get('/', (req, res, next) => {
  res.send('Hello Hudson Valley! You requested ' + req.url)
})

app.use('/users', users);
app.use('/workouts', workouts);
app.use('/comments', comments);
app.use('/reactions', reactions);

app.get('*', (req, res, next) => {
  const filename = path.join(__dirname, '/../docs/index.html');
  console.log(filename);
  res.sendFile( filename );
})

app.use( (err, req, res, next) =>{
    console.log(err);
    res.status(err.status || 500).send( { message: err.message } )
} )

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})