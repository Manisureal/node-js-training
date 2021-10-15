import csv from 'csvtojson';
import { pipeline } from 'stream/promises';
import { join } from 'path';
import { createReadStream, createWriteStream, existsSync } from 'fs';
import { promises as fsPromises } from 'fs';

const readableStream = createReadStream(join(__dirname, 'csv/nodejs-hw1-ex1.csv'));
const writableStream = createWriteStream(join(__dirname, 'txt/nodejs-hw1-ex1.txt'));

console.log(join(__dirname, 'csv/nodejs-hw1-ex1.csv'))

const writeConvertedCsvToTxtFile = async () =>  {
  if (!existsSync(join(__dirname, 'txt'))) {
    await fsPromises.mkdir(join(__dirname, 'txt'));
  }

  await pipeline(
    readableStream,
    csv({
      noheader: false,
      headers: ['book','author','amount','price'],
      colParser:{
        "amount":"omit",
      },
    }),
    writableStream
  );
}

writeConvertedCsvToTxtFile().catch(console.error);
