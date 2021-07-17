export default (): any => ({
  nodeEnv: process.env.NODE_ENV || 'DEVELOPMENT',
  port: parseInt(process.env.PORT, 10) || 3000,
  appBaseUrl: process.env.APP_BASE_URL,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});
