const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
const mongoDB = mongoose.connection;
// console.log(mongoose);
mongoDB.on('error', console.error.bind(console, 'connection error'));
mongoDB.once('open', () => {
  console.log('connect success');
});

const loginSchema = new mongoose.Schema({ username: String, password: String });
const Login = mongoDB.model('login', loginSchema, 'login');
const user1 = new Login({ username: 'zhangsan', password: 'test' });
user1.save((err) => {
  if (err) {
    return console.log(err);
  }
  console.log('插入成功!');
});

let query = Login.find({ username: 'zhangsan' });
query.then((doc) => {
  console.log(doc);
});

