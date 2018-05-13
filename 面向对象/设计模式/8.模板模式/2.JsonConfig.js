const util = require('util');
const ConfigTemplate = require('./1.模板模式');

class JsonConfig extends ConfigTemplate {

  constructor() {
    super();
  }

  _deserialize(data) {
    console.log(data,111);
    return JSON.parse(data);
  }

  _serialize(data) {
    return JSON.stringify(data, null, '   ');
  }
}

module.exports = JsonConfig;
