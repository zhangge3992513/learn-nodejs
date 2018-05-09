const stampit = require('stampit');

/**
 * 定义基本角色charator的工厂函数
 */
const charactor = stampit().props({
  name: 'anonymous',
  lifePoints: 100,
  x: 0,
  y: 0,
});
const c = charactor();
c.name = 'John';
c.lifePoints = 10;
console.log(c);

/**
 * 定义mover的工厂函数
 */
const mover = stampit().methods({
  move(xIncr, yIncr) {
    this.x += xIncr;
    this.y += yIncr;
    console.log(`${this.name} moved to [${this.x}, ${this.y}]`);
  },
});

/**
 * 定义slasher工厂函数
 */
const slasher = stampit().methods({
  slash(direction) {
    console.log(`${this.name} slashed to the ${direction}`);
  },
});

/**
 * 定义shooter工厂函数
 */
const shooter = stampit().props({
  bullets: 6, // 子弹
}).methods({
  shoot(direction) {
    console.log(`${this.name} shoot to the ${direction}`);
  },
});

/**
 * 组合charactor, mover工厂函数来创建runner构造函数
 */
const runner = stampit.compose(charactor, mover);

const samurai = stampit.compose(charactor, mover, slasher);

const sniper = stampit.compose(charactor, shooter);

const gunslinger = stampit.compose(charactor, shooter, mover);

// const westernSamurai = stampit.compose(charactor, mover, slasher, shooter); // 换下面方法也可行

const westernSamurai = stampit.compose(samurai, gunslinger);

const gojiro = westernSamurai();
gojiro.name = ' g ojiro Kiryu';
gojiro.move(1, 0);
gojiro.slash('left');
gojiro.shoot('right');
