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
/* const user1 = new Login({ username: 'zhangsan', password: 'test' });
user1.save((err) => {
  if (err) {
    return console.log(err);
  }
  console.log('插入成功!');
});
let query = Login.find({ username: 'zhangsan' });
query.then((doc) => {
  console.log(doc);
}); */

const blogListSchema = new mongoose.Schema({
  title: String,
  kind: String,
  id: String,
});
const BlogList = mongoDB.model('blogList', blogListSchema, 'blogList');

/**
 * 查询某个分类下的全部文章
 * @param {*} kind
 */
async function getBlogList(kind) {
  let query = {}; // 一个空对作为查询条件, 表示查询所有结果
  let results = [];
  if (kind !== '/') {
    query = { kind };
  }
  results = await blogListSchema.find(query);
  return results;
}

/**
 * 查找ID的最大值
 */
async function queryMaxID() {
  let temp = 0;
  await blogListSchema.find({}).sort({ id: -1 }).limit(1).then((doc) => {
    if (doc.length > 0) {
      temp = doc[0].id;
    } else {
      console.log('collection is empty');
    }
  });
  return temp;
}

/**
 * 添加
 * @param {*} title 
 * @param {*} kind 
 */
async function insertBlogList(title, kind) {
  let value = await queryMaxID();
  /* eslint no-plusplus: 0 */
  const record = new BlogList({ title, kind, id: ++value });
  record.save((err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('insert done');
  });
}

/**
 * 删除blog
 * * 未定义成async
 * @param {*} id 
 */
function deleteBlogId(id) {
  const query = { id };
  BlogList.remove(query).then(doc => {
    console.log('done');
  });
}

/**
 * 修改blog分类
 * @param {*} id 
 * @param {*} kind 
 */
function modifyBlogKind(id, kind) {
  let query = { id };
  BlogList.findOneAndUpdate(query, { kind }.then( doc => {
    console.log('done');
  }));
}

async


