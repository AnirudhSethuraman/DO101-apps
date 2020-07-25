var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n This is Anirudh <br/> welcome to my Red Hat openshift example \n :) :) <img src="__custom_showroom_1557510309.png"  width="80" height="80">');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

