var koa = require('koa');
var app = koa();

app.use(function* (next){
  if (this.path !== '/') return yield next;
  this.body = 'hello koa';
});

app.use(function* (next){
  if (this.path !== '/404') return yield next;
  this.status = 404;
  this.body = 'page not found';
});

app.use(function* (next){
  if (this.path !== '/500') return yield next;
  this.status = 500;
  this.body = 'internal server error';
});

app.listen(3000);
