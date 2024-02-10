const crypto = require("crypto");

async function getData() {
  return crypto.randomBytes(50);
}

module.exports = {
  getData,
};
