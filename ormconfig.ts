export default {
  type: 'mongodb',

  url: process.env.DB_URL,
  useUnifiedTopology: true,

  synchronize: true,
  logging: true,
  entities: [
    'src/entity/**/*.ts',
  ],
  migrations: [
    'src/migration/**/*.ts',
  ],
  subscribers: [
    'src/subscriber/**/*.ts',
  ],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};
