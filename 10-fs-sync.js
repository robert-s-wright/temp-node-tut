//synchronous, avoid unless using for something like ssl.

const { readFileSync, writeFileSync } = require("fs");

//or

// const fs = require('fs');
// fs.readFileSync

//readFileSync

console.log("start");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

//writeFileSync

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next task");
