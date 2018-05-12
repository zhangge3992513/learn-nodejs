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
    this.changState('offline');
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

