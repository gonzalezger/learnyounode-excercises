const fs = require('fs');
const path = require('path');

module.exports = function(dir, ext, cb) {
    fs.readdir(dir, (err, files) => {
        if (err) return cb(err);

        return cb(null, files.filter(file => {
            return path.extname(file) === `.${ext}`;
        }));
    });
}