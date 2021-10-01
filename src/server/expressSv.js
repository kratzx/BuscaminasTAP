import express from 'express';
import * as Router from '../router/index.js'; 

class Server {

  constructor() {
    this._port = 3000;
    this._app = express();
  }

  port(port) {
    this._port = port;
    return this;
  }

  start() {
    this._loadMiddleware();
    this._loadRoutes();
    this._app.listen(this._port, () => {
      console.log(`App listening at http://localhost:${this._port}`);
    })
  }

  _loadRoutes() {
    Router.home(this._app);
    Router.buscaminas(this._app);
  }

  _loadMiddleware() {}

}

const expressSv = new Server();

export default expressSv;