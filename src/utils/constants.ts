import 'dotenv/config';

export const SERVER = {
  PORT: process.env.PORT || 3333,
  NODE_ENV: process.env.NODE_ENV || 'development',
  BASE_URI: process.env.BASE_URI || '',
};

export const DATABASE = {
  DB_NAME: process.env.DB_NAME || '',
  DB_DIALECT: process.env.DB_DIALECT || 'mssql',
  DB_HOST: process.env.DB_HOST || '',
  DB_USERNAME: process.env.DB_USERNAME || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_INSTANCE_NAME: process.env.DB_INSTANCE_NAME || '',
  DB_PORT: process.env.DB_PORT || '',
};

export const SECRET = {
  FILENAME_HASH_SECRET: process.env.FILENAME_HASH_SECRET || '',
  JWT_SECRET: process.env.JWT_SECRET || '',
}