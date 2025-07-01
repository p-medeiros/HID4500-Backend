import fs from 'fs';
import path from 'path';
import { decodeBase64Image } from '../utils/fileUtils';

const fingerprintDir = path.join(__dirname, '../fingerprints');

export const saveFingerprint = (imageBase64: string, filename: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const buffer = decodeBase64Image(imageBase64);
    const filePath = path.join(fingerprintDir, filename);

    fs.writeFile(filePath, buffer, err => {
      if (err) return reject(err);
      resolve(filePath);
    });
  });
};

export const compareFingerprint = async (
  imageBase64: string,
  targetFilename: string
): Promise<{ match: boolean; score: number }> => {
  // Simulação (substituir pela lógica real com uareu-node)
  const score = parseFloat((Math.random() * 100).toFixed(1));
  const match = score > 80;
  return { match, score };
};

export const listFingerprints = (): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    fs.readdir(fingerprintDir, (err, files) => {
      if (err) return reject(err);
      const pngFiles = files.filter(f => f.endsWith('.png'));
      resolve(pngFiles);
    });
  });
};

export const deleteFingerprint = (filename: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(fingerprintDir, filename);
    if (!fs.existsSync(filePath)) return reject(new Error('Arquivo não encontrado.'));
    fs.unlink(filePath, err => {
      if (err) return reject(err);
      resolve();
    });
  });
};
