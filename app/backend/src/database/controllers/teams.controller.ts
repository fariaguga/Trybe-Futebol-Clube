import { Request, Response } from 'express';
import TeamsService from '../services/teams.service';

class TeamsController {
  static getAll = async (_req: Request, res: Response) => {
    const data = await TeamsService.getAll();
    return res.status(200).json(data);
  };

  static getTeamsById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await TeamsService.getTeamsById(Number(id));
    return res.status(200).json(data);
  };

}

export default TeamsController;
