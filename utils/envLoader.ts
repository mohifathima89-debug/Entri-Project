import * as dotenv from 'dotenv';

dotenv.config({ path: './config/env.qa' });

export const ENV = {
  APP_URL: process.env.APP_URL || '',
  COUNTRY: process.env.COUNTRY || 'India'
};
