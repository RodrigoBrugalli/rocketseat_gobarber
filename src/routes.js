// Router é o que permite separar as rotas do express em outros arquivos
import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.put('/users', authMiddleware, UserController.update);

export default routes;
