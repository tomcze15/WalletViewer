import express from 'express';
import { postSignup } from '../controllers/auth.controllers.js';
import { postCreateWallet } from '../controllers/wallet.js';

const router = express.Router();

router.get('/wallets/');
router.post('/wallets/create', postCreateWallet);
router.post('/auth/signup', postSignup);

export default router;
