import * as express from 'express';
import TeamsController from '../controllers/teams.controller';

const routerTeams = express.Router();

routerTeams.get('/', TeamsController.getAll);

export default routerTeams;
