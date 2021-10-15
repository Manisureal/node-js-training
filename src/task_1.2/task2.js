const csv = require('csvtojson');
const { pipeline } = require('stream/promises');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const readableStream = fs.createReadStream(path.join(__dirname, 'csv/nodejs-hw1-ex1.csv'));
const writableStream = fs.createWriteStream(path.join(__dirname, 'txt/nodejs-hw1-ex1.txt'));

const writeConvertedCsvToTxtFile = async () =>  {
  if (!fs.existsSync(path.join(__dirname, 'txt'))) {
    await fsPromises.mkdir(path.join(__dirname, 'txt'))
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
