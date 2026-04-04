process.loadEnvFile();

const ServerConfig = {
  PORT: process.env.PORT,
  FLIGHT_SERVICE: process.env.FLIGHT_SERVICE,
};

module.exports = ServerConfig;
