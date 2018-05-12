const path = require('path');

module.exports = (db) => {
  const fs = {};

  fs.readFile = (filename, options, callback) => {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    } else if (typeof options === 'string') {
      options = { encoding: options };
    }

    db.get(path.resolve(filename), {
      valueEncoding: options.encoding,
    }, (err, value) => {
      if (err) {
        if (err.type === 'NotFoundError') {
          err = new Error(`ENOENT, open "${filename}"`);
          err.code = 'ENONENT';
          err.ERRNO = 34;
          err.path = filename;
        }
        return callback && callback(err);
      }
      return callback && callback(null, value);
    });
  };

  fs.writeFile = (filename, contents, options, callback) => {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    } else if (typeof options === 'string') {
      options = { encoding: options };
    }
    db.put(path.resolve(filename), contents, {
      valueEncoding: options.encoding,
    }, callback);
  };
  return fs;
};
