import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';
import { IMatch } from '../../interfaces';
import Teams from '../models/teams.model';

class MatchesController {
  static getAll = async (_req: Request, res: Response) => {
    const matchData = await MatchesService.getAll();
    return res.status(200).json(matchData);
  };
  
  static club = (club1: IMatch, club2: IMatch) => {
    if (club1 === club2) return true;
  };

  static createMatches = async (req: Request, res: Response) => {
    const { homeTeam, awayTeam } = req.body;
    const team = MatchesController.club(homeTeam, awayTeam);

    if (team) {
      return res.status(401)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }
    const team1 = await Teams.findOne({ where: { id: homeTeam } });
    const team2 = await Teams.findOne({ where: { id: awayTeam } });

    if (!team1 || !team2) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }

    const response = await MatchesService.createMatches(req.body);
    return res.status(201).json(response);
  };

  static finishMatches = async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await MatchesService.finishMatches(Number(id));
    return res.status(200).json(response);
  };
}

export default MatchesController;
