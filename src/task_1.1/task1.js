const process = require('process');
const stdin = process.stdin;
const stdout = process.stdout;

stdout.write("Please enter a value to reverse it or type '1' to exit... \n \n")

stdin.on("readable", () => {
  let chunk = stdin.read();
  
  if (parseInt(chunk) === 1) {
    return stdin.emit("end");
  }

  if (chunk !== null) {
    chunk = chunk.toString();
    stdout.write(`${chunk.split("").reverse().join("")} \n${"-".repeat(chunk.length -1)} \n`);
  }
});
  
stdin.on("end", () => {
  stdout.write("Program exited successfully... \n");
});
