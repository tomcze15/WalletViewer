import Wallet from '../models/wallet.js';
import { userId } from '../utils/database.js';

const postCreateWallet = (req, res) => {
  const { title } = req.body;

  const newWallet = new Wallet({ title, userId });

  newWallet
    .save()
    .then(() => {
      console.log('Created Wallet');
      res.status(200).send();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });
};

export { postCreateWallet };
