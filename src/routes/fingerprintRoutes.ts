import { Router } from 'express';
import {
  captureFingerprint,
  compareFingerprint,
  listFingerprints,
  deleteFingerprint
} from '../controllers/fingerprintController';

const router = Router();

router.post('/capture', captureFingerprint);
router.post('/compare', compareFingerprint);
router.get('/templates', listFingerprints);
router.delete('/template/:filename', deleteFingerprint);

export default router;
