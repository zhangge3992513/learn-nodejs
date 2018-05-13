const OfflineState = require('./offlineState');
const OnlineState = require('./OnlineState');

class FailsafeSocket {
  constructor(options) {
    this.options = options;
    this.queue = [];
    this.currentState = null;
    this.socket = null;
    this.stastes = {
      offline: new OfflineState(this),
      online: new OnlineState(this),
    };
    this.changState('offline'); // 初始设置成离线.状态, 500毫秒后会自动连接上去会变成在线状态.
  }
  changState(state) {
    console.log(`Activating state: ${state}`);
    this.currentState = this.states[state];
    this.currentState.active();
  }

  send(data) {
    this.currentState.send(data);
  }
}
module.exports = options => new FailsafeSocket(options);

