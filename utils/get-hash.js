const crypto = require('crypto');

const getHash = (
  string,
  salt = crypto.randomBytes(32).toString('base64')
) => new Promise((resolve, reject) => {
  crypto.pbkdf2(string, salt, 5000, 64, 'sha512', (err, derivedString) => {
    if (err) {
      reject(err);
    }
    resolve({
      salt,
      hash: derivedString.toString('base64'),
    });
  });
});

module.exports = getHash;
