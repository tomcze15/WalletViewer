import express from 'express';

const port = process.env.PORT || 8001;
const server = express();

server.listen({ port }, () => console.log(`listening on localhost ${port}`));
