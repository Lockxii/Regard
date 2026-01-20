import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';

dotenv.config();

const sql = neon(process.env.DATABASE_URL!);

async function main() {
  console.log('Dropping tables...');
  try {
    await sql`DROP TABLE IF EXISTS "expenses" CASCADE`;
    await sql`DROP TABLE IF EXISTS "subscriptions" CASCADE`;
    await sql`DROP TABLE IF EXISTS "goals" CASCADE`;
    await sql`DROP TABLE IF EXISTS "users" CASCADE`;
    await sql`DROP TABLE IF EXISTS "session" CASCADE`;
    await sql`DROP TABLE IF EXISTS "account" CASCADE`;
    await sql`DROP TABLE IF EXISTS "verification_token" CASCADE`;
    await sql`DROP TABLE IF EXISTS "user" CASCADE`; // Singualr in case
    await sql`DROP TABLE IF EXISTS "verification" CASCADE`;
    await sql`DROP TABLE IF EXISTS "activity_logs" CASCADE`;
    await sql`DROP TABLE IF EXISTS "admin_mail_logs" CASCADE`;
    console.log('Tables dropped.');
  } catch (e) {
    console.error('Error dropping tables:', e);
  }
}

main();
