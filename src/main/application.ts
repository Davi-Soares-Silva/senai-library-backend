import express from 'express';
import cors from 'cors';

import setupPublicRoutes from './configs/public-routes';

const server = express();

server.use(cors({ exposedHeaders: 'X-Total-Count' }));
server.use(express.json());

setupPublicRoutes(server);

export { server };
