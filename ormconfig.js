require('dotenv').config();

module.exports = {
  name: 'default',
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [`${__dirname}/**/entity/*.entity{.ts,.js}`],
  seeds: [`${__dirname}/seeds/**.seed.ts`],
  synchronize: true,
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'migrations',
  },
};
