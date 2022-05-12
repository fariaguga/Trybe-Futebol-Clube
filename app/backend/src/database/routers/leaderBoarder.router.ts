import * as express from 'express';
import LeaderboardController from '../controllers/leaderBoard.controller';

const routerLeaderBoard = express.Router();

routerLeaderBoard.get('/home', LeaderboardController.leaderboard);

export default routerLeaderBoard;
