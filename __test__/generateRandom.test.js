import { generateRandomId, multipleRandomNumbers } from '../src/helpers/generateRandom.js';

describe('generateRandom tests', () => {
  it('generateRandomId', () => {
    const hexRegex = /[0-9a-fA-F]{8}/;
    const result = generateRandomId();

    expect(typeof result).toBe('string');
    expect(result.length).toBe(8);
    expect(hexRegex.test(result)).toBe(true);
  });
  it('multipleRandomNumbers', () => {
    const MAX_NUMBER = 100, AMOUNT = 5;
    const result = multipleRandomNumbers(MAX_NUMBER, AMOUNT);

    expect(result instanceof Set).toBe(true);
    expect(result.size).toBe(AMOUNT);
    expect(Array.from(result).every((num) => num < MAX_NUMBER)).toBe(true);
  });
})