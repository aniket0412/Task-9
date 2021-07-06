const fs = require('fs');

fs.mkdirSync('devil');

fs.writeFileSync("devil/eve,txt","Hello Dosto");
fs.appendFileSync("devil/eve.txt","My name is Doraemon :)");

const data = fs.readFileSync("devil/eve.txt","Hello");
console.log(data);

fs.renameSync("devil/eve.txt", "devil/exe.txt");

fs.unlinkSync("devil/exe.txt");

fs.rmdirSync("devil");
