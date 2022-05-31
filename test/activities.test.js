const index = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const httpCodes = require('../constants/constants');

require('dotenv').config();
chai.should();
chai.use(chaiHttp);

describe('#1 Endpoint Activites', () => {
  describe('GET /activities', () => {
    it('should response 200 status code', done => {
      chai
        .request(index)
        .get('/activities')
        .end((err, res) => {
          res.should.have.status(httpCodes.OK);
          done();
        });
    });
    it('should response 200 status code if id exist and return all the corresponding fields', done => {
      chai
        .request(index)
        .get('/activities/1')
        .end((err, res) => {
          res.should.have.status(httpCodes.OK);
          done();
        });
    });
  });
});

describe('#2 Endpoint Activites', () => {
  describe('POST /activities', () => {
    it('should response 200 status code', done => {
      chai
        .request(index)
        .post('/activities')
        .send({
          name: 'Test',
          image:
            'https://previews.123rf.com/images/visionsi/visionsi1409/visionsi140900022/31207102-farmer-est%C3%A1-trabajando-en-la-granja-org%C3%A1nica-con-vacas-lecheras-modelo-es-un-trabajador-agr%C3%ADcola-rea.jpg',
          content:
            'This is a test, the information below is does not exist, or is not real',
        })
        .end((err, res) => {
          res.should.have.status(httpCodes.OK);
          done();
        });
    });
    it('should response 403 status code if it missing any field information', done => {
      chai
        .request(index)
        .post('/activities')
        .end((err, res) => {
          res.should.have.status(httpCodes.FORBIDDEN);
          done();
        });
    });
  });
});

describe('#3 Endpoint Activites', () => {
  describe('PUT /activities', () => {
    it('should response 200 status code', done => {
      chai
        .request(index)
        .put('/activities/2')
        .send({
          name: 'Update test',
          image:
            'https://previews.123rf.com/images/visionsi/visionsi1409/visionsi140900022/31207102-farmer-est%C3%A1-trabajando-en-la-granja-org%C3%A1nica-con-vacas-lecheras-modelo-es-un-trabajador-agr%C3%ADcola-rea.jpg',
          content:
            'This is a update test, the information below is does not exist, or is not real',
        })
        .end((err, res) => {
          res.should.have.status(httpCodes.OK);
          done();
        });
    });
    it('should response 404 status code if never send a valid id', done => {
      chai
        .request(index)
        .put('/activities')
        .end((err, res) => {
          res.should.have.status(httpCodes.NOT_FOUND);
          done();
        });
    });
  });
});

describe('#4 Endpoint Activites', () => {
  describe('DELETE /activities', () => {
    it('should response 200 status code', done => {
      chai
        .request(index)
        .delete('/activities/11')
        .end((err, res) => {
          res.should.have.status(httpCodes.OK);
          done();
        });
    });
    it('should response 404 status code if never send a valid id', done => {
      chai
        .request(index)
        .delete('/activities/9999')
        .end((err, res) => {
          res.should.have.status(httpCodes.NOT_FOUND);
          done();
        });
    });
  });
});
