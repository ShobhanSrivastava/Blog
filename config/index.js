import dotenv from 'dotenv';

dotenv.config();

export const {
    PORT, DB_CONN,
} = process.env;