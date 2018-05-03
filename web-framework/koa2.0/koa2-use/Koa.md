# Koa

## Koa2.0

### koa中间件

1. 洋葱模型
  最后一个中间件执行了next(), 则会继续执行接口, 然后res,
     再执行各个中间件的next()函数后面的代码.
2. 若中间件中没有执行next(), 则向上执行,此处和express一致.
   即是: 执行完遮盖中间件, 继续向上执行, 直到执行完所有步骤, 返回数据res.
   哪怕后面还会有next();这个则会报错.
3. koa的中间件是不会卡住挂起的, 如果没有next()执行, 则会先返回not found(后面的代码会继续执行),
   哪怕后面几秒钟会有next()执行.
4. await 和 没有await 完全不一样, 有await可以控制后面的异步函数
5. 每个请求的处理函数都应该是async函数.

### koa-router

1. 使用了koa-router后, app.use() 与 router.use();
   这个router.use()注册的中间件不需要最后执行next()才能执行, app.use()注册的中间件需要最后有next()才能执行.

### ctx.body

1. ctx.body会覆盖值, 在最后一个路由中间件中会自动执行res.end(ctx.body);

### delegator

1. 把对象中的属性和方法委托到另一个对象上
