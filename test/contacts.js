const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

const httpCodes = require('../constants/constants');

require('dotenv').config();
chai.should();
chai.use(chaiHttp);

const STANDARD_USER_TOKEN = process.env.TEST_STANDARD_USER_TOKEN;
const ADMIN_USER_TOKEN = process.env.TEST_ADMIN_USER_TOKEN;

describe('Contacts API', () => {
  describe('GET /contacts', () => {
    it('should return unauthorized for guests', done => {
      chai
        .request(server)
        .get('/contacts')
        .end((err, res) => {
          res.should.have.status(httpCodes.UNAUTHORIZED);
          done();
        });
    });

    it('should return unauthorized for standard user', done => {
      chai
        .request(server)
        .get('/contacts')
        .set('Authorization', `Bearer ${STANDARD_USER_TOKEN}`)
        .end((err, res) => {
          res.should.have.status(httpCodes.UNAUTHORIZED);
          done();
        });
    });

    it('should return all contacts', done => {
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
});
