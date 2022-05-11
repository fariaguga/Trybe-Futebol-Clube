import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { matchsMock } from './mock/models';
import { Model } from 'sequelize/types';

import { app } from '../app';
import Matches from '../database/models/matches.model';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;


interface IMatches extends Model {
  id: number;
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

interface MatchTeam extends IMatches {
  teamHome: { teamName: string },
  teamAway: { teamName: string }
}

describe('Verifica se existe o endpoint /matchs', () => {
  describe('Verifica rota GET', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      sinon.stub(Matches, 'findAll').resolves(matchsMock as MatchTeam[]);
    })

    after(() => {
      (Matches.findAll as sinon.SinonStub).restore();
    });

    it('verifica a rota GET /matches', async () => {
      chaiHttpResponse = await chai.request(app).get('/matches');
      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.be.a('array');
      expect(chaiHttpResponse.body).to.be.deep.equal(matchsMock);
    });
  });
});

