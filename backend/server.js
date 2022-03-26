import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import walletsRoutes from './routes/wallet.js';
import { MONGODB_URI } from './utils/database.js';

const port = process.env.PORT || 8001;
const server = express();

const corsSettings = {
  origin: '*',
};

server.use(
  express.urlencoded({ extended: false }),
  cors(corsSettings),
  express.json(),
  walletsRoutes
);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    server.listen({ port }, () =>
      console.log(`listening on localhost ${port}`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
