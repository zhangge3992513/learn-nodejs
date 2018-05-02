const router = require('koa-router')();

router.get('/timeout', async (ctx, next) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('/timeout');
      ctx.body = {
        data: [1, 2, 3, 4],
        msg: 'ok',
        errCode: 0,
      };
      resolve();
      // next();
    }, 5000);
  });
});

router.get('/users', (ctx) => {
  ctx.body = {
    data: [
      {

        id: 1,
        name: '张三',
      },
      {

        id: 2,
        name: '张三',
      },
      {

        id: 3,
        name: '张三',
      },
    ],
    msg: 'ok',
    errCode: 0,
  };
});

router.get('/user/:id', (ctx) => {
  ctx.body = {
    user: {
      id: 1,
      name: '张三',
    },
    msg: 'ok',
    errCode: 0,
  };
});


module.exports = router;
