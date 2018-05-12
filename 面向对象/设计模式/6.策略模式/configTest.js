const Config = require('./1.config');
const strategies = require('./1.strategies');

const jsonConfig = new Config(strategies.json);
jsonConfig.read(__dirname + '/samples/conf.json');
jsonConfig.set('book.nodejs', 'design patterns');
jsonConfig.save(__dirname + '/samples/conf_mod.json');

const initConfig2 = new Config(strategies.ini);
initConfig2.read(__dirname + '/samples/conf.ini');
initConfig2.set('book.nodejs', 'design patterns');
initConfig2.save(__dirname + '/samples/conf_mod.ini');
