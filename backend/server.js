import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import cors from 'cors';

import { init } from './controllers/session.controller.js';
import walletsRoutes from './routes/wallet.js';
import { MONGODB_URI } from './utils/database.js';

const port = process.env.PORT || 8001;
const server = express();

const corsSettings = {
  origin: '*',
};

const MongoDbStore = mongoDbStore(session);
const store = MongoStore.create({
  mongoUrl: MONGODB_URI,
});

server.use(
  express.urlencoded({ extended: false }),
  cors(corsSettings),
  express.json(),
  session(init(store)),
  walletsRoutes
);

server.listen({ port }, () => console.log(`listening on localhost ${port}`));

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
