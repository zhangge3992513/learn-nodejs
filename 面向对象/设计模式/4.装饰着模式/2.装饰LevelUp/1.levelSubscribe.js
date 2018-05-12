module.exports = (db) => {
  db.subScribe = (pattern, listener) => { // *对象增强
    db.on('put', (key, val) => {
      const match = Object.keys(pattern).every(k => (pattern[k] === val[k]));
      if (match) {
        listener(key, val);
      }
    });
  };
  return db;
};
// *实际上就是给db添加额外的方法.
