import express from 'express';
import { postCreateWallet } from '../controllers/wallet.js';

const router = express.Router();

router.get('/wallets/');
router.post('/wallets/create', postCreateWallet);

export default router;
