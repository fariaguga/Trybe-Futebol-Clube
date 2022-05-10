import * as express from 'express';
import TeamsController from '../controllers/teams.controller';

const routerTeams = express.Router();

routerTeams.get('/', TeamsController.getAll);
routerTeams.get('/:id', TeamsController.getTeamsById);

export default routerTeams;
