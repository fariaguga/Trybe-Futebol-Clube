import * as express from 'express';
import MatchesController from '../controllers/matches.controller';
import matchesValidation from '../validation/matches.validation';


const routerMatches = express.Router();

routerMatches.get('/', MatchesController.getAll);
routerMatches.post('/', matchesValidation, MatchesController.createMatches);
routerMatches.patch('/:id/finish', MatchesController.finishMatches);

export default routerMatches;
