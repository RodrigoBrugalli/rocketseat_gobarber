import express from 'express';
import routes from './routes';

import './database';

class App {
  // Constructor são executados toda vez que a classe é chamada
  constructor() {
    this.server = express();

    /* O routes e middleares precisam estar
    No contructor se não nunca vão ser chamados
    */
    this.middleares();
    this.routes();
  }

  middleares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}
// Istanciando a aplicação
export default new App().server;
