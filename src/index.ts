import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import HomeController from './controllers/HomeController';
import LogController from './controllers/LogController';

require('dotenv').config();

createConnection().then(() => {
  const app = express();
  app.use(express.json());

  app.get('/', HomeController.index);
  app.get('/logs', LogController.list);
  app.post('/log', LogController.create);

  app.listen(process.env.PORT || 8000, () => {
    console.log('Server started.');
  });
});
