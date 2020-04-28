module.exports = {
  app: {
    host: '0.0.0.0',
    port: 3000
  },
  database: {
    name: 'default',
    type: 'mysql',
    port: 3306,
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'test',
    synchronize: true,
    logging: false
  }
}