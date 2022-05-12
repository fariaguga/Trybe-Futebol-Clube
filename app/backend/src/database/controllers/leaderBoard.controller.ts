import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderBoard.service';

class LeaderboardController {
  static leaderboard = async (_req: Request, res: Response) => {
    const data = await LeaderboardService.getAllLeaderboard();
    return res.status(200).json(data);
  };
}

export default LeaderboardController;
