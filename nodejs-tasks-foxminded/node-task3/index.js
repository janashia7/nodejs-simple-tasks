const crypto = require("crypto");

const { argv } = require('process');

const text = process.argv[2];
const args = process.argv;

if(text == null){
    console.log('add argument in command line')
    process.exit();
}else if(args.length > 3){
    console.log('type only one argument in command line');
    process.exit()
}

const hash = crypto.createHash("md5").update(text).digest("hex");
console.log(hash);
