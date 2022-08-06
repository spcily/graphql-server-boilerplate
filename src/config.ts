import dotenv from 'dotenv';

dotenv.config();

const config = {
  mainDB: {
    user: process.env.PG_USER,
    pass: process.env.PG_PASS,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    name: process.env.PG_NAME,
  },
};

export const getConfig = () => config;
