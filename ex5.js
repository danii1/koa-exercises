var koa = require('koa');
var app = koa();

app.use(function* (next){
  console.log(this.request.type, this.is('json'));
  if (this.is('json')) {
    this.body = { message: 'hi!'};
  } else {
    this.body = 'ok';
  }
});

app.listen(3000);
