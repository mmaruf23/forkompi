import mysql from "mysql2/promise";

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS,
  database: process.env.DB_NAME || "forkompi",
  waitForConnections: true,
  connectionLimit: 10, // Batasan koneksi untuk pool
  queueLimit: 0,
};

// Buat connection pool untuk manajemen koneksi yang efisien
const pool = mysql.createPool(dbConfig);

// Fungsi untuk mendapatkan koneksi dari pool
export async function getConnection() {
  return await pool.getConnection();
}

// Fungsi untuk menjalankan query dengan prepared statement
export async function query<T>(sql: string, params?: unknown[]): Promise<T> {
  let connection: mysql.PoolConnection | undefined;
  try {
    connection = await pool.getConnection();
    // Menggunakan connection.execute() untuk prepared statements -> PENTING UNTUK KEAMANAN SQL INJECTION
    const [rows] = await connection.execute(sql, params);
    return rows as T;
  } catch (error) {
    console.error("Database query error:", error);
    throw error; // Lempar error agar bisa ditangani di API route
  } finally {
    if (connection) connection.release(); // Pastikan koneksi dikembalikan ke pool
  }
}
