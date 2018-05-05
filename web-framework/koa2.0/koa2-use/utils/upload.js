const formidable = require('formidable');
const fs = require('fs');
const { join } = require('path');

function dealUpload(ctx) {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true; // 保存原有的扩展名.
  form.uploadDir = join(__dirname, '../public/html'); // 保存路径文件夹
  form.parse(ctx.req, (err, fields, files) => {
    if (err) {
      throw err;
    }
    fs.rename(files.file.path, form.uploadDir + files.file.name, (errRename) => {
      if (errRename) {
        throw errRename;
      }
    });
  });
}
module.exports = dealUpload;

