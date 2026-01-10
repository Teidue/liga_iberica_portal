import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host:
    process.env.NODE_ENV === 'production'
      ? 'ep-twilight-truth-a4fgvypc-pooler.us-east-1.aws.neon.tech'
      : process.env.DB_HOST || 'localhost',
  port: 5432,
  username:
    process.env.NODE_ENV === 'production'
      ? 'neondb_owner'
      : process.env.DB_USERNAME || 'postgres',
  password:
    process.env.NODE_ENV === 'production'
      ? 'npg_oAShDzOj6H2s'
      : process.env.DB_PASSWORD || 'tadeo123',
  database:
    process.env.NODE_ENV === 'production'
      ? 'neondb'
      : process.env.DB_DATABASE || 'liga_iberica_portal',
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
  synchronize: process.env.NODE_ENV === 'development',
  logging: process.env.NODE_ENV === 'development',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
});
