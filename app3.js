const fs  = require('fs');
const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  if (ctx.path == '/good'){
    return ctx.body = 'good'
  }
  
  fs.readFile('somefile.txt', function (err, data) {
    try {
      if (err) throw err;
      console.log(data);

      ctx.body = 'Hello Koa';
      
    } catch (e) {
      // 这里捕获不到 readCallback 函数中抛出的异常
      console.log(e)
    } finally {
      console.log('离开 try/catch');
    }
  });

});

app.listen(3000);