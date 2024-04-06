// Add ./db/db.ts

import 'dotenv/config';
import pg from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

if (!('DATABASE_URL' in process.env))
  throw new Error('DATABASE_URL not found on .env, connection failed');

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 1,
});
export const db = drizzle(pool);
