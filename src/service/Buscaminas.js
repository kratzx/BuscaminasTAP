import { multipleRandomNumbers } from "../helpers/generateRandom.js";

const X_SIZE = 6, Y_SIZE = 6, MINES = 10;

export default class Buscaminas {
  constructor (id) {
    this.id = id;
    this.level = Buscaminas.generateLevel(X_SIZE, Y_SIZE, MINES);
  }

  static generateLevel(xSize, ySize, mines) {
    let level = [];
    const positions = multipleRandomNumbers(xSize * ySize, mines);
    for (let j = 0; j < ySize; j++) {
      let row = [];
      for (let i = 0; i < xSize; i++) {
        let value = '';
        if (positions.has(i + (j * xSize))) {
          value = 'mina';
        }
        row.push(value);
      }
      level.push(row);
    }
    return level;
  }

  static isValidLevel(obj) {
    // TODO
    return true;
  }

  static isValidBuscaminas(obj) {
    return obj?.hasOwnProperty('id') 
      && obj?.hasOwnProperty('level') 
      && Buscaminas.isValidLevel(obj);
  }
}