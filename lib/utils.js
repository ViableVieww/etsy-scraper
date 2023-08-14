import 'dotenv/config';
import AWS from 'aws-sdk';
import fs from 'fs';
const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
});
import path from 'path';

export const writeTextToS3 = async (filename, body) => {
  const BUCKET = process.env.BUCKET;

  return await s3.upload({
    Bucket: BUCKET,
    Key: filename,
    Body: body,
    ContentType: 'text/plain'
  }).promise().then(
      data => data.Location,
      err => console.error(`writeToS3 ${BUCKET} ${filename} ERROR:`, err)
  );
}

export const clearFile = async (file) => {
  // Get the directory path of the current module
  const currentDirectory = path.dirname(new URL(import.meta.url).pathname);
  // Construct the JSON file path
  const jsonFilePath = path.join(currentDirectory, '..', file);

  fs.writeFile(jsonFilePath, '', (err) => {
    if (err) {
      console.error('Error clearing file:', err);
    } else {
      console.log('File contents cleared successfully.');
    }
  });
}

export const getFileData = (file) => {
  return fs.readFileSync(file, 'utf8', (err, data) => {
    if (err) {
      console.error('An error occurred:', err);
      return;
    }
    
    return data;
  });
}

export const writeToFile = async (file, data) => {
  try {
    let dataToWrite = {};
    // Get the directory path of the current module
    const currentDirectory = path.dirname(new URL(import.meta.url).pathname);
    // Construct the JSON file path
    const jsonFilePath = path.join(currentDirectory, '..', file);
    
    const existingData = getFileData(file);
    if (existingData.trim() === '') {
      dataToWrite = {
        ...[
          data
        ]
      }
    } else {
      dataToWrite = JSON.parse(existingData);
      // Define the index for the new object
      const newIndex = Object.keys(dataToWrite).length;
      dataToWrite[newIndex] = data;
    }

    // Write the modified object back to the JSON file
    fs.writeFileSync(jsonFilePath, JSON.stringify(dataToWrite, null, 2));

    console.log('Data appended successfully.');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('JSON file not found.');
    } else {
      console.log('An error occurred:', error.message);
    }
  }
}

export const purgeDuplicates = (file) => {
  const data = getFileData(file);
  const jsonData = JSON.parse(data);
  // Get the directory path of the current module
  const currentDirectory = path.dirname(new URL(import.meta.url).pathname);
  // Construct the JSON file path
  const jsonFilePath = path.join(currentDirectory, '..', file);
  

    // Create a new array for unique objects
    const finalShopList = {};
    const idSet = new Set(); // To keep track of existing IDs
    let index = 0;

    console.log('jsonData',jsonData)

    for (const key in jsonData) {
      if (jsonData.hasOwnProperty(key)) {
        const innerObject = jsonData[key];
        if (!idSet.has(innerObject.shopID)) {
          // If the ID is not seen before, add the object to the uniqueArray
          finalShopList[index] = innerObject;
          idSet.add(innerObject.shopID);
        }
      }
      index++;
    }

    // Write the unique array back to the output file
    fs.writeFile(jsonFilePath, JSON.stringify(finalShopList, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
      }
    });
}