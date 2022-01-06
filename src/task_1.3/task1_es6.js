import { createInterface } from 'readline';

const ac = new AbortController();
const { signal } = ac;

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const endProgram = () => {
  console.log('Program exited successfully... \n');
  process.exit();
};

const reverseInput = (value) => {
  if (value === '') {
    console.error('Please enter a value...');
  }

  if (value === '1') {
    ac.abort();
  }

  if (typeof value === 'string') {
    console.log(`${value?.split('').reverse().join('')} \n`);
  }
};

signal.addEventListener(
  'abort',
  endProgram,
  { once: true }
);

rl.setPrompt("Please enter a value to reverse it or type '1' to exit... \n \n");
rl.prompt();
rl.on('line', (input) => reverseInput(input));

reverseInput();
