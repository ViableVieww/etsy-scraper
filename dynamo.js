import AWS from 'aws-sdk';
import dotEnv from 'dotenv';

dotEnv.config()

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'listings';


const getListings = async () => {
    const params = {
        TableName: TABLE_NAME,
    };
    const listings = await dynamoClient.scan(params).promise();
    return listings;
};

const getListingById = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id,
        },
    };
    return await dynamoClient.get(params).promise();
};

const addOrUpdateListing = async (listing) => {
    const params = {
        TableName: TABLE_NAME,
        Item: Listing,
    };
    return await dynamoClient.put(params).promise();
};

const deleteListing = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id,
        },
    };
    return await dynamoClient.delete(params).promise();
};

module.exports = {
    dynamoClient,
    getListings,
    getListingById,
    addOrUpdateListing,
    deleteListing,
};