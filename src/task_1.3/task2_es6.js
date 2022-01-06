import csv from 'csvtojson';
import { pipeline } from 'stream/promises';
import { join } from 'path';
import {
  createReadStream, createWriteStream, existsSync, promises
} from 'fs';

const readFilePath = 'csv/nodejs-hw1-ex1.csv';
const writeFilePath = 'txt/nodejs-hw1-ex1.txt';
const writeDirectoryExists = existsSync(join(__dirname, 'txt'));
const csvOptions = {
  noheader: false,
  headers: ['book', 'author', 'amount', 'price'],
  colParser: {
    amount: 'omit'
  }
};

const readableStream = createReadStream(join(__dirname, readFilePath));
const writableStream = createWriteStream(join(__dirname, writeFilePath));

const writeConvertedCsvToTxtFile = async () => {
  if (!writeDirectoryExists) {
    await promises.mkdir(join(__dirname, 'txt'));
  }

  await pipeline(
    readableStream,
    csv(csvOptions),
    writableStream
  );
};

writeConvertedCsvToTxtFile().catch(console.error);
