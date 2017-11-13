var express = require('express');
var app = express();

app.disable('x-powered-by');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

require('./src/routes.js')(app);

app.listen(3000, (err) => {
  if(err) {
    console.log("Error listening on port: %s", JSON.stringify(err));
    throw err;
  }
  console.log('listening on port 3000');
  app.emit('ready');
});
