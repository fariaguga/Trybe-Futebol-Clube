import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { User as userMock } from './mock/models';

import { app } from '../app';
import UsersModel from '../database/models/users.model';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Verifica se o endpoint /login existe', () => {
  let chaiHttpResponse: Response;
  before(async () => {
    sinon.stub(UsersModel, 'findOne').resolves({
      ...userMock.findOne
    } as UsersModel);
  });

  after(() => {
    (UsersModel.findOne as sinon.SinonStub).restore();
  });

  it('Verifica se retorna status 200', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({
      email: 'gustavofaria@email.com',
      password: '123',
    });
    expect(chaiHttpResponse).to.have.status(200);
  });
});

describe('Verifica os erros na rota /login', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(UsersModel, 'findOne').resolves({
      ...userMock.findOne
    } as UsersModel);
  })

  after(() => {
    (UsersModel.findOne as sinon.SinonStub).restore();
  });

  it('Verifica se os dados são retornados', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({
      email: 'gustavofaria@email.com',
    });
    expect(chaiHttpResponse).to.have.status(401);
    expect(chaiHttpResponse.body).to.be.equal({ message: "Bad request" });
  });
});


describe('Verifica há a rota /login/validation', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(UsersModel, 'findOne').resolves({
      ...userMock.findOne
    } as UsersModel);
  })

  after(() => {
    (UsersModel.findOne as sinon.SinonStub).restore();
  });

  it('Verifica se retorna status 200', async () => {
    chaiHttpResponse = await chai.request(app).get('/login/validate').send('admin');
    const { token }: any = 'super_senha';
    chaiHttpResponse = await chai.request(app).get('/login/validate')
    .set({ Authorization: `${ token }` })
    .send('admin')
    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.a('string');
    expect(chaiHttpResponse.body).to.be.eq('admin');
  });
});