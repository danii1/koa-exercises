var session = require('koa-session');
var koa     = require('koa');
var app     = koa();

app.keys = ['super', 'secret'];
app.use(session(app));

app.use(function* (next) {
  if (this.path !== '/') return yield next;

  var viewCount = this.session.views || 0;
  this.session.views = ++viewCount;
  this.body = viewCount + ' views';
});

app.listen(3000);
