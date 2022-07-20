const crypto = require("crypto");
const fs = require('fs');

const { argv } = require('process');

const filePath = process.argv[2];
const args = process.argv;

if(args.length == null){
    console.log('add argument in command line')
    process.exit(1);
}else if(args.length > 3){
    console.log('type only one argument in command line');
    process.exit(1)
}

const readPath = fs.readFileSync(filePath, 'utf8');



const hash = crypto.createHash("md5").update(readPath).digest("hex");
console.log(hash);
