import * as express from 'express';
import MatchesController from '../controllers/matches.controller';


const routerMatches = express.Router();

routerMatches.get('/', MatchesController.getAll);

export default routerMatches;
