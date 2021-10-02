import { generateRandomId } from '../helpers/generateRandom.js';
import Buscaminas from './Buscaminas.js';

class BuscaminasFactory {
  
  constructor() {
    this.storage = {};
  }

  create() {
    const id = generateRandomId();
    this.storage[id] = new Buscaminas(id);
    return this.storage[id];
  }

  findById(id) {
    const obj = this.storage[id];
    if (Buscaminas.isValidBuscaminas(obj)) {
      return obj;
    } else {
      throw new Error(`No existe ID: ${id}`);
    }
  }

  save(obj) {
    if (Buscaminas.isValidBuscaminas(obj)) {
      const id = obj.id;
      const saved = this.storage[id];
      if (Buscaminas.isValidBuscaminas(saved)) {
        this.storage[id] = obj;
      } else {
        throw new Error(`No existe ID: ${id}`);
      }
    } else {
      throw new Error(`Nivel no valido! ID: ${id} Nivel:${obj}`);
    }
  }
}

const buscaminasFactory = new BuscaminasFactory();

export default buscaminasFactory;