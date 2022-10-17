// setup database here, change the values to suit your environment
module.exports = {
  HOST: "127.0.0.1",
  USER: "binar",
  PASSWORD: "binar",
  DB: "binar_challenge_6_dev",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
