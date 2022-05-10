import * as express from 'express';
import { inputValidation, formatValidation } from '../validation/login.validation';
import { LoginController } from '../controllers/login.controller';

const Router = express.Router();

Router.post('/', inputValidation, formatValidation, LoginController.login);

export default Router;
