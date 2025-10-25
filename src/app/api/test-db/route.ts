import { NextResponse } from 'next/server';
import { ENV } from '@/lib/env';
import mysql from 'mysql2/promise';

export async function GET() {
  try {
    // Test database connection
    const connection = await mysql.createConnection({
      host: ENV.DB_HOST,
      port: parseInt(ENV.DB_PORT),
      user: ENV.DB_USER,
      password: ENV.DB_PASSWORD,
      database: ENV.DB_NAME,
    });

    await connection.ping();
    await connection.end();

    return NextResponse.json({ 
      success: true, 
      message: 'Database connection successful',
      config: {
        host: ENV.DB_HOST,
        port: ENV.DB_PORT,
        user: ENV.DB_USER,
        database: ENV.DB_NAME,
      }
    });
  } catch (error: any) {
    return NextResponse.json({ 
      success: false,
      error: error?.message || 'Unknown error',
      code: error?.code,
      errno: error?.errno,
      sqlMessage: error?.sqlMessage,
      config: {
        host: ENV.DB_HOST,
        port: ENV.DB_PORT,
        user: ENV.DB_USER,
        database: ENV.DB_NAME,
      }
    }, { status: 500 });
  }
}
