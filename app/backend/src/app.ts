import * as express from 'express';
import * as cors from 'cors';
import Router from './database/routers/Router';
import 'dotenv/config';
import routerTeams from './database/routers/teams.router';
import routerMatches from './database/routers/matches.router';
import routerLeaderBoard from './database/routers/leaderBoarder.router';

class App {
  public app: express.Express;
  // ...

  constructor() {
    // ...
    this.app = express();
    this.config();
    // ...
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    // ...
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use('/login', Router);
    this.app.use('/teams', routerTeams);
    this.app.use('/matches', routerMatches);
    this.app.use('/leaderboard', routerLeaderBoard);
  }

  // ...
  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log('Ouvindo na porta', PORT));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();