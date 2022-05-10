import * as sinon from 'sinon';
import * as chai from 'chai';
import { mockClubs } from './mock/models';
import chaiHttp = require('chai-http');

import { app } from '../app';
import Teams from '../database/models/teams.model';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Verifica se a rota /teams existe', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(Teams, 'findAll').resolves(mockClubs as Teams[]);
  })

  after(() => {
    (Teams.findAll as sinon.SinonStub).restore();
  });

  it('Verifica se retorna status 200', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams').send();
    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.a('array');
    expect(chaiHttpResponse.body).to.deep.eq(mockClubs);
  });
});

describe('Verifica se o endpoint /teams:id existe', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(Teams, 'findByPk').resolves(mockClubs[1] as Teams);
  })

  after(() => {
    (Teams.findOne as sinon.SinonStub).restore();
  });

  it('Verifica se retorna status 200', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams/1');
    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.a('object');
    expect(chaiHttpResponse.body).to.be.eq(mockClubs[1]);
  });
});