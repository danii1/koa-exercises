var fs  = require('fs');
var koa = require('koa');
var app = koa();

app.use(function* (next){
  if (this.path !== '/json') return yield next;
  this.body = { foo: 'bar' };
});

app.use(function* (next){
  if (this.path !== '/stream') return yield next;
  this.body = fs.createReadStream('ex4.js');
});

app.listen(3000);
