const JsonConfig = require('./2.JsonConfig');

const jsonConfig = new JsonConfig();
jsonConfig.read(__dirname+'/samples/conf.json');
jsonConfig.set('nodejs', 'design patterns');
jsonConfig.save(__dirname+'/samples/conf_mod.json');
// console.log(JSON.parse(`{name: '张三', sex: '男', age: '12', nodejs: 'design patterns' }`));
