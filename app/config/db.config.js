module.exports = {
  HOST: "apitesting.postgres.database.azure.com",
  USER: "admin2",
  PASSWORD: "Password@123",
  DB: "postgres",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
