const fs = require('fs');
const objectPath = require('object-path');
class ConfigTemplate {
  read(file) {
    console.log(`Deserializing from ${file}`);
    this.data = this._deserialize(fs.readFileSync(file, 'utf-8'));
  }

  save(file) {
    console.log(`Serializing to ${file}`);
    console.log(this.data, 222);
    fs.writeFileSync(file, this._serialize(this.data));
  }

  get(path) {
    return objectPath.get(this.data, path);
  }

  set(path, value) {
    return objectPath.set(this.data, path, value);
  }

  _deserialize() {
    throw new Error('_serialize() must be impleted');
  }

  _serialize() {
    throw new Error('_deserialize() must be impleted');
  }
}

module.exports = ConfigTemplate;
