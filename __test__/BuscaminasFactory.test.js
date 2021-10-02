import buscaminasFactory from '../src/service/BuscaminasFactory.js';

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
    expect(searched.level).toBe(searched.level);
  });

  it('Buscar ID inexistente', () => {
    
  });

  it('Guardar', () => {

  });

  it('Guardar ID inexistente', () => {
      
  });
})