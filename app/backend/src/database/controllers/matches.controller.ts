import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';
import { IMatch } from '../../interfaces';

class MatchesController {
  static getAll = async (_req: Request, res: Response) => {
    const matchData = await MatchesService.getAll();
    return res.status(200).json(matchData);
  };
  
  static club = (club1: IMatch, club2: IMatch) => {
    if (club1 === club2) return true;
  };
}

export default MatchesController;
