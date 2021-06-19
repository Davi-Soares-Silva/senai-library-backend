import 'dotenv/config';

export const SERVER = {
  PORT: process.env.PORT || 3333,
  NODE_ENV: process.env.NODE_ENV || 'development',
  BASE_URI: process.env.BASE_URI || '',
};
