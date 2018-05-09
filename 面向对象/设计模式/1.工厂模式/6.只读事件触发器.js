const EventEmitter = require('events');

class Rose extends EventEmitter {
  constructor(executor) {
    super();
    const emit = this.emit.bind(this);
    this.emit = undefined; // 这个类的对象无法调用emit函数, 即无法发射事件.
    executor(emit); // 在生成对象的时候就要发射事件, 即: 构造函数的参数函数内部执行emit
  }
}

const ticker = new Rose((emit) => {
  let tickCount = 0;
  setInterval(() => emit('tick', tickCount++), 1000);
});
ticker.on('tick', (tickCount) => {
  console.log(tickCount, 'Tick');
});
