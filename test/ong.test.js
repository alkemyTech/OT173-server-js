const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http")
const httpCodes = require("../constants/constants");

require("dotenv").config();
chai.should();
chai.use(chaiHttp);

describe("Test organizations API", () => {
    describe("GET /organizations", () => {
        it("should return unauthorized (401) for guests", done => {
            chai
                .request(app)
                .get("/organizations")
                .end((err, res) => {
                    res.should.have.status(httpCodes.UNAUTHORIZED);
                    done();
                })
        });

        it('should response 200 status code if id exist and return all the corresponding fields', done => {
            chai
              .request(index)
              .get('/organizations/1')
              .end((err, res) => {
                res.should.have.status(httpCodes.OK);
                done();
              });
          });
    })
});

describe('#3 Endpoint Organizations', () => {
    describe('PUT /organizations', () => {
      it('should response 200 status code', done => {
        chai
          .request(index)
          .put('/organizations/2')
          .send({
            name: 'Update test',
            image:
              'https://previews.123rf.com/images/visionsi/visionsi1409/visionsi140900022/31207102-farmer-est%C3%A1-trabajando-en-la-granja-org%C3%A1nica-con-vacas-lecheras-modelo-es-un-trabajador-agr%C3%ADcola-rea.jpg',
            phone: "12345678",
            address: "Av. Siempre Viva 123",
            welcomeText: "This is a welcome text.",
            facebook: "http://facebook.com/org",
            linkedin: "https://linkedin.com",
            instagram: "http://instagram.com",
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
          .put('/organizations')
          .end((err, res) => {
            res.should.have.status(httpCodes.NOT_FOUND);
            done();
          });
      });
    });
  });