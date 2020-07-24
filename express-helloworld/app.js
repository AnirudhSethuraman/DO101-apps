var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
  res.send('This is Anirudh\n');
  res.send('welcome to my Red Hat openshift example \n :) :) ');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

