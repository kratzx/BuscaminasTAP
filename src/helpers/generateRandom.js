import crypto from 'crypto';

export const generateRandomId = () => crypto.randomBytes(4).toString('hex');

export const multipleRandomNumbers = (maxNum, amount) => {
  const randomNumbers = new Set();
  while (randomNumbers.size < amount) {
    randomNumbers.add(Math.floor(Math.random() * maxNum));
  }
  return randomNumbers;
}