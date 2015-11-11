var koa = require('koa');
var app = koa();
var parse = require('co-body');

app.use(function* (){
  var body = yield parse(this);
  if (body.name === 'koa') this.body = 'KOA';
})

app.listen(3000);
