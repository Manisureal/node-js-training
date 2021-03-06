const process = require('process');

const { stdin, stdout, exit } = process;

const reverseString = () => {
  let chunk = stdin.read();

  if (parseInt(chunk, 10) === 1) {
    return stdin.emit('end');
  }

  if (chunk !== null) {
    chunk = chunk.toString();
    stdout.write(`${chunk.split('').reverse().join('')} \n${'-'.repeat(chunk.length - 1)} \n`);
  }
};

const endProgram = () => {
  stdout.write('Program exited successfully... \n');
  exit();
};

stdout.write("Please enter a value to reverse it or type '1' to exit... \n \n");
stdin.on('readable', reverseString);
stdin.on('end', endProgram);
