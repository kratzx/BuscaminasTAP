import Buscaminas from '../src/service/Buscaminas.js';

describe('Buscaminas tests', () => {

  describe('generateLevel', () => {
    it('Genera un array 2D 6x6 con 10 minas', () => {
      const X_SIZE = 6, Y_SIZE = 6, MINES = 10;
      const arr = Buscaminas.generateLevel(X_SIZE, Y_SIZE, MINES);
      expect(arr.length).toBe(Y_SIZE);
      expect(arr.every((e) => e.length === X_SIZE)).toBe(true);
      expect(arr.flat().filter((e) => e === 'mina').length).toBe(MINES);
    });
  })

  describe('isValidBuscaminas', () => {
    it('Buscaminas valido', () => {
      const mockBuscaminas = {
        id: "2e64b031",
        level: [ 
          ["","","","mina","","mina"],
          ["","","","","",""],
          ["","","","","mina",""],
          ["","","mina","mina","","mina"],
          ["","mina","","mina","",""],
          ["","","mina","","mina",""]
        ]
      }
      const response = Buscaminas.isValidBuscaminas(mockBuscaminas);
      expect(response).toBe(true);
    });

    it('Buscaminas con ID no definido', () => {
      const mockBuscaminas = {
        level: [ 
          ["","","","mina","","mina"],
          ["","","","","",""],
          ["","","","","mina",""],
          ["","","mina","mina","","mina"],
          ["","mina","","mina","",""],
          ["","","mina","","mina",""]
        ]
      }
      const response = Buscaminas.isValidBuscaminas(mockBuscaminas);
      expect(response).toBe(false);
    });

    it('Buscaminas valido', () => {
      const mockBuscaminas = {
        id: "2e64b031"
      }
      const response = Buscaminas.isValidBuscaminas(mockBuscaminas);
      expect(response).toBe(false);
    });
  })
})