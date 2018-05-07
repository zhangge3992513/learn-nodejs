const test = require('ava');

test('foo1', (t) => {
  t.pass();
});

test('bar1', async (t) => {
  const bar = Promise.resolve('bar');

  t.is(await bar, 'bar');
});
