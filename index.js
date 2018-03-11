
//jshint esversion:6
const express = require('express');
const app = express();

app.use('/', express.static(__dirname+'/build'));

ap.get('*',(req,res) => {
  res.sendFile(__dirname,'/build/index.html');
});

const port = process.env.PORT || 5000;

app.listen(port,() => {
  console.log('connection bravo');
});
