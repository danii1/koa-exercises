var views = require('co-views');
var koa     = require('koa');
var app     = koa();

var render = views(__dirname + '/views', { ext: 'ejs' });

app.use(function* (next) {

  var user = {
    name: {
      first: 'John',
      last: 'Doe'
    },
    species: 'dolphin',
    age: 3
  };

  this.body = yield render('user', { user: user });

});

app.listen(3000);
