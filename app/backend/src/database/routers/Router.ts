import * as express from 'express';
import { inputValidation, formatValidation } from '../validation/login.validation';
import { LoginController } from '../controllers/login.controller';
import tokenAuth from '../validation/tokenAuth';

const Router = express.Router();

Router.post('/', inputValidation, formatValidation, LoginController.login);
Router.get('/validate', tokenAuth, LoginController.getLogin);
export default Router;
