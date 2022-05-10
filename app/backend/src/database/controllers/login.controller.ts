import { Request, Response } from 'express';

import LoginService from '../services/login.service';
import { IUser } from '../../interfaces';

export class LoginController {
  static login = async (req: Request, res: Response) => {
    const user: IUser = req.body;
    const response = await LoginService.login(user);
    return res.status(200).json(response);
  };

  static getLogin = async (req: Request, res: Response) => {
    const response = await LoginService.getLogin(req.body);
    return res.status(200).json(response);
  };

  
}

export default LoginController;
