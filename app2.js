const fs  = require('fs');
const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  if (ctx.path == '/good'){
    return ctx.body = 'good'
  }
  fs.readFile('somefile.txt', function (err, data) {
    if (err) throw err;
    console.log(data);

    ctx.body = 'Hello Koa';
  });
});

process.on('uncaughtException', function (err) {
  console.log(err);
})

app.listen(3000);