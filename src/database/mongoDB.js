import mongoose from "mongoose";
import * as Schemas from '../schema/index.js'

class MongoDB {

  constructor() {
    this._uri = '';
    this.schemas = {};
    this.app = mongoose;
  }

  async start() {
    await this.app.connect(this._uri);
  }
}

const mongoDB = new MongoDB();

export default mongoDB;