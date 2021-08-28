import express from 'express';

import routes from './routes';
import Database from './database';

import { options } from './swagger';
import expressJSDocSwagger from 'express-jsdoc-swagger';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.database();
    this.swagger();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.server.use(routes)
  }

  database() {
    this.db = new Database();
    this.db.connect();
  }

  swagger() {
    expressJSDocSwagger(this.server)(options);
  }

}

export default new App().server;
