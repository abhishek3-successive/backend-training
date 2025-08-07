import dotenv from 'dotenv';

dotenv.config();

const configurations = Object.freeze({
  mongo_uri: process.env.MONGO_DB_URI
});

export default configurations;