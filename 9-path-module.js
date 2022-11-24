const path = require("path");

console.log(path.sep);

//path.join provides path joining with /
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

//path.basename (provides base file name)
const base = path.basename(filePath);
console.log(base);

//path.resolve (provides absolute path)
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
