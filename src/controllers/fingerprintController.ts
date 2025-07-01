import { Request, Response } from 'express';
import * as fingerprintService from '../services/fingerprintService';
export const captureFingerprint = async (req: Request, res: Response) => {
  const { imageBase64, filename } = req.body;

  try {
    const path = await fingerprintService.saveFingerprint(imageBase64, filename);
    res.json({ success: true, path });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const compareFingerprint = async (req: Request, res: Response) => {
  const { imageBase64, targetFilename } = req.body;

  try {
    const result = await fingerprintService.compareFingerprint(imageBase64, targetFilename);
    res.json(result);
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const listFingerprints = async (_req: Request, res: Response) => {
  const files = await fingerprintService.listFingerprints();
  res.json({ files });
};

export const deleteFingerprint = async (req: Request, res: Response) => {
  try {
    await fingerprintService.deleteFingerprint(req.params.filename);
    res.json({ success: true });
  } catch (error: any) {
    res.status(404).json({ success: false, message: error.message });
  }
};
