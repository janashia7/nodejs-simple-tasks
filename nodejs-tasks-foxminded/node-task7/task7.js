const readline = require('readline');
const fs = require('fs');
const {argv} = require('process');

const args = process.argv;
let lineCount = 0;

if (args.length < 3) {
  console.log("add argument in command line");
  process.exit(1);
} else if (args.length > 3) {
  console.log("type only one argument in command line");
  process.exit(1);
}


const readFileFrom = fs.createReadStream(`${args[2]}`, 'utf8');

const output = () => {
    const rl = readline.createInterface({
        input: readFileFrom
    });
    rl.on('line', (input) => {
        const country = input.split(',')
        console.log(`${lineCount}: ${country[0]}`)
        lineCount++
    });
}

output()
