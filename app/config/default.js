const config = {
    port: process.env.PORT || 8080,
    database: {
      DATABASE: process.env.DB,
      USERNAME: process.env.DB_USER,
      PASSWORD: process.env.DB_PASSWORD,
      HOST: '0.0.0.0',
      PORT: process.env.DB_PORT || 3306
    }
  };
  
  module.exports = config;