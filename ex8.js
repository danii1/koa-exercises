'use strict';

var koa = require('koa');
var app = koa();

app.keys = ['super', 'secret'];

app.use(function* (next) {
  if (this.path !== '/') return yield next;

  let viewCount = this.cookies.get('view', { signed: true }) || 0;
  viewCount = parseInt(viewCount) + 1;
  this.body = viewCount + ' views';
  this.cookies.set('view', viewCount, { signed: true });
});

app.listen(3000);
