const myModule = require('./mymodule');

myModule(process.argv[2], process.argv[3], (err, data) => {
    if (err) return;

    data.forEach(file => {
        console.log(file);
    });
});