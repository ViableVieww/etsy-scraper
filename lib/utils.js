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

  return await s3
    .upload({
      Bucket: BUCKET,
      Key: filename,
      Body: body,
      ContentType: 'text/plain'
    })
    .promise()
    .then(
      (data) => data.Location,
      (err) => console.error(`writeToS3 ${BUCKET} ${filename} ERROR:`, err)
    );
};

// Function to clear a folder
export const clearFolder = (folderPath) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('Error getting file stats:', err);
          return;
        }

        if (stats.isDirectory()) {
          fs.rmdir(filePath, { recursive: true }, (err) => {
            if (err) {
              console.error('Error removing folder:', err);
            } else {
              console.log('Folder removed:', filePath);
            }
          });
        }
      });
    });
  });
};

export const getFileData = (file) => {
  return fs.readFileSync(file, 'utf8', (err, data) => {
    if (err) {
      console.error('An error occurred:', err);
      return;
    }

    return data;
  });
};

export const writeToFile = async (file, data, index) => {
  try {
    let dataToWrite = {};

    const existingData = getFileData(file);
    if (existingData.trim() === '') {
      dataToWrite = {
        [index]: data
      };
    } else {
      dataToWrite = JSON.parse(existingData);
      dataToWrite[index] = data;
    }

    // Write the modified object back to the JSON file
    fs.writeFileSync(file, JSON.stringify(dataToWrite, null, 2));

    console.log('Data appended successfully.');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('JSON file not found.');
    } else {
      console.log('An error occurred:', error.message);
    }
  }
};

export const purgeDuplicates = (jsonData) => {
  // Create a new array for unique objects
  const finalShopList = {};
  const idSet = new Set(); // To keep track of existing IDs
  let index = 0;

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

  return finalShopList;
};

export const createFile = async (file) => {
  fs.writeFile(file, '', (err) => {
    if (err) {
      console.error('An error occurred while creating file:', err);
    } else {
      // console.log('File created successfully!');
    }
  });
};

export const createFolder = async (folderName) => {
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
  } catch (err) {
    console.error(err);
  }
};
