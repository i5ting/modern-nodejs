const fs  = require('fs');
const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  fs.readFile('somefile.txt', function (err, data) {
    if (err) throw err;
    console.log(data);

    ctx.body = 'Hello Koa';
  });
});

app.listen(3000);