import buscaminasFactory from '../src/service/BuscaminasFactory.js';

const arrayRotate = (arr) => arr.push(arr.shift());

describe('BuscaminasFactory tests', () => {
  it('Crear', () => {
    const result = buscaminasFactory.create();

    expect(result.hasOwnProperty('id')).toBe(true);
    expect(result.hasOwnProperty('level')).toBe(true);
    expect(typeof result.id).toBe('string');
    expect(result.level instanceof Array).toBe(true);
    expect(result.id.length).toBeTruthy();
    expect(result.level.length).toBeTruthy();
  });

  it('Encontrar por ID', () => {
    const created = buscaminasFactory.create();
    const searched = buscaminasFactory.findById(created.id);

    expect(created.id).toBe(searched.id);
    expect(created.level).toBe(searched.level);
  });

  it('Buscar ID inexistente', () => {
    const dummy = buscaminasFactory.create();

    expect(() => {
      buscaminasFactory.findById(dummy.id.slice(2));
    }).toThrow(Error);
  });

  it('Guardar', () => {
    const created = buscaminasFactory.create();
    created.level = arrayRotate(created.level);
    buscaminasFactory.save(created);
    const searched = buscaminasFactory.findById(created.id);

    expect(created.id).toBe(searched.id);
    expect(created.level).toBe(searched.level);
  });

  it('Guardar ID inexistente', () => {
    const created = buscaminasFactory.create();
    created.level = arrayRotate(created.level);
    created.id = created.id.slice(2);

    expect(() => {
      buscaminasFactory.save(created);
    }).toThrow(Error);   
  });
})