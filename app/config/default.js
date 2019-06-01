const config = {
    port: process.env.WEB_PORT,
    database: {
        DATABASE: process.env.DB,
        USERNAME: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
        HOST: process.env.DB_HOST,
        PORT: process.env.DB_PORT,
        CHARTSET: process.env.DB_CHARSET
    }
};
  
module.exports = config;