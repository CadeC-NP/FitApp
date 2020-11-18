const express = require('express')
require('dotenv').config();

const users = require('./controllers/users');
const workouts = require('./controllers/workouts');
const comments = require('./controllers/comments');
const reactions = require('./controllers/reactions');

const app = express();
const port = process.env.PORT || 3000;

console.log(process.env.TEST);

app.use(express.json());
app.use(express.static( __dirname + '/../docs/'));

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

app.use( (err, req, res, next) =>{
    console.log(err);
    res.status(err.status || 500).send( { message: err.message } )
} )

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})