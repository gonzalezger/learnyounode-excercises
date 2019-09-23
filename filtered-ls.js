'use strict';

const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const ext = `.${process.argv[3]}`;

fs.readdir(dir, (err, files) => {
    if (err) throw err;

    for (let i = 0; i <= files.length; i++) {
        const fileExt = path.extname(files[i]);
        if (fileExt === ext) console.log(files[i]);
    }
});