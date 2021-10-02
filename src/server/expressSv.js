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

  _loadMiddleware() {
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: true }));
    this._app.use((req, res, next) => {
      console.log(`${req.method} ${req.originalUrl}`);
      next();
    })
  }

}

const expressSv = new Server();

export default expressSv;