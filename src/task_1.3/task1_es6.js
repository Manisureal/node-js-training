import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const reverseInput = () => {
  rl.question("Please enter a value to reverse it or type '1' to exit... \n", (value) => {
    if (value === ''){
      console.error('Please enter a value...')
    }
  
    if (value === '1'){
      rl.close();
      process.stdin.destroy();
    }
    
    console.log(`${value.split("").reverse().join("")} \n`);
    reverseInput();
  });
}

reverseInput();
