var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n This is Anirudh <br/> welcome to my Red Hat openshift example :) :) <br/> <img src="https://github.com/AnirudhSethuraman/DO101-apps/blob/master/express-helloworld/4221396001_5587902850001_5587885277001-vs.jpg"  width="100" height="80">');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

