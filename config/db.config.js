module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root1234",
  DB: "absenspn",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
