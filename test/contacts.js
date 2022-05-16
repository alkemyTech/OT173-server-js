const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

const httpCodes = require('../constants/constants');

require('dotenv').config();
chai.should();
chai.use(chaiHttp);

const STANDARD_USER_TOKEN = process.env.TEST_STANDARD_USER_TOKEN;
const ADMIN_USER_TOKEN = process.env.TEST_ADMIN_USER_TOKEN;

describe('Test Contacts API', () => {
  describe('GET /contacts', () => {
    it('should return unauthorized (401) for guests', done => {
      chai
        .request(server)
        .get('/contacts')
        .end((err, res) => {
          res.should.have.status(httpCodes.UNAUTHORIZED);
          done();
        });
    });

    it('should return unauthorized (401) for standard user', done => {
      chai
        .request(server)
        .get('/contacts')
        .set('Authorization', `Bearer ${STANDARD_USER_TOKEN}`)
        .end((err, res) => {
          res.should.have.status(httpCodes.UNAUTHORIZED);
          done();
        });
    });

    it('should return all contacts with ok status (200)', done => {
      chai
        .request(server)
        .get('/contacts')
        .set('Authorization', `Bearer ${ADMIN_USER_TOKEN}`)
        .end((err, res) => {
          res.should.have.status(httpCodes.OK);
          res.body.should.be.a('array');
          if (res.body.length > 0) {
            res.body[0].should.have.property('id');
            res.body[0].should.have.property('name');
            res.body[0].should.have.property('email');
            res.body[0].should.have.property('phone');
            res.body[0].should.have.property('message');
          }
          done();
        });
    });
  });

  describe('POST /contacts', () => {
    it('should return bad request (400) because bad email format', done => {
      chai
        .request(server)
        .post('/contacts')
        .send({
          name: 'User Test',
          phone: '+5492612345678',
          email: 'test@test',
          message: 'User test message',
        })
        .end((err, res) => {
          res.should.have.status(httpCodes.BAD_REQUEST);
          done();
        });
    });

    it('should return bad request (400) because no name', done => {
      chai
        .request(server)
        .post('/contacts')
        .send({
          phone: '+5492612345678',
          email: 'test@test.test',
          message: 'User test message',
        })
        .end((err, res) => {
          res.should.have.status(httpCodes.BAD_REQUEST);
          done();
        });
    });

    it('should return ok status (200) even for guests', done => {
      chai
        .request(server)
        .post('/contacts')
        .send({
          name: 'User Test',
          phone: '+5492612345678',
          email: 'test@test.test',
          message: 'User test message',
        })
        .end((err, res) => {
          res.should.have.status(httpCodes.OK);
          done();
        });
    });
  });
});
