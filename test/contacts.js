const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

require('dotenv').config();
chai.should();
chai.use(chaiHttp);

const STANDARD_USER_TOKEN = process.env.TEST_STANDARD_USER_TOKEN;
const ADMIN_USER_TOKEN = process.env.TEST_ADMIN_USER_TOKEN;

describe('Contacts API', () => {
  describe('GET /contacts', () => {
    it('should return all contacts', done => {
      chai
        .request(server)
        .get('/contacts')
        .set('Authorization', `Bearer ${ADMIN_USER_TOKEN}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });
});
