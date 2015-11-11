var koa = require('koa');

var app = koa();

app.use(responseTime());
app.use(upperCase());

app.use(function* () {
  this.body = 'hello koa';
});

function responseTime() {
  return function* (next) {
    var start = new Date();
    yield next;
    var end = new Date();
    // set X-Response-Time head
    this.set('X-Response-Time', end - start);
  };
}

function upperCase() {
  return function* (next) {
    // do nothing
    yield next;
    this.body = this.body.toUpperCase();
    // convert this.body to upper case
  };
}

app.listen(3000);
