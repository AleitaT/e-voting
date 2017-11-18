var express = require('express');
var app = express();
module.exports = app;

app.disable('x-powered-by');

app.set('views', './views');
app.set('view engine', 'pug');
// set port here 
app.set('port', 33369);

app.use(express.static(__dirname + '/public'));

require('./src/routes.js')(app);

app.listen(app.get('port'), (err) => {
  if(err) {
    console.log("Error listening on port: %s", JSON.stringify(err));
    throw err;
  }
  console.log('Express started on http://localhost:' + app.get('port'));
	app.emit('ready');
});
