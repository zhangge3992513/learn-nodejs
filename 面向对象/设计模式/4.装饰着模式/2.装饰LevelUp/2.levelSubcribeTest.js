const level = require('level');
const levelSubscribe = require('./1.levelSubscribe');
let db = level(__dirname+'/db', { valueEncoding: 'json' });
db = levelSubscribe(db);
db.subScribe({ doctype: 'tweet', language: 'en' }, (k, val) => console.log(val));

db.put('1', { doctype: 'tweet', text: 'Hi', language: 'en' });
db.put('2', { doctype: 'company', name: 'ACME Co.' });
