import { generateRandomId } from '../helpers/generateRandom.js';
import Buscaminas from './Buscaminas.js';

export default class BuscaminasFactory {
  
  constructor() {
    this.storage = {};
  }

  create() {
    const id = generateRandomId();
    this.storage[id] = new Buscaminas(id);
    return id;
  }

  findById(id) {
    const obj = this.storage[id];
    if (obj instanceof Buscaminas) {
      return obj;
    } else {
      throw new Error('No existe ID');
    }
  }

  save(id, obj) {
    if (Buscaminas.isValidLevel(obj)) {
      const saved = this.storage[id];
      if (saved instanceof Buscaminas && saved.id === id) {
        this.storage[id] = obj;
      } else {
        throw new Error('No existe ID');
      }
    } else {
      throw new Error('Nivel no valido!');
    }
  }
}