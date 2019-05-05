const config = {
    port: process.env.PORT || '8080',
    database: {
        DATABASE: process.env.DB || 'mapa_pressao-01',
        USERNAME: process.env.DB_USER || 'root',
        PASSWORD: process.env.DB_PASSWORD || 'supersecret',
        HOST: process.env.DB_HOST || '127.0.0.1',
        PORT: process.env.DB_PORT || '3306'
    }
};
  
module.exports = config;