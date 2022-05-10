import { Request, Response } from 'express';
import TeamsService from '../services/teams.service';

class TeamsController {
  static getAll = async (_req: Request, res: Response) => {
    const data = await TeamsService.getAll();
    return res.status(200).json(data);
  };

}

export default TeamsController;
