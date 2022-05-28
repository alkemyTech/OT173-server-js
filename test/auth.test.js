const app = require('../app');
const supertest = require("supertest");
const httpCodes = require('../constants/constants');
const api = supertest(app);
const db = require("../models")
const user = {
  firstName:"Carlos",
  lastName:"Prueba",
  email:"emailprueba@gmail.com",
  password:"prueba123",
};

beforeAll( async ()=>{
  await api
  .post('/auth/register')
  .send(user)
})


describe("Auth register and login", () => {
  it('Register should respond with a 200 status code and user email',async ()=>{
      const response = await api
      .post('/auth/register')
      .send({...user,email:"emailprueba2@gmail.com"})
      expect(response.status).toEqual(httpCodes.OK)
      expect(response.body.email).toEqual("emailprueba2@gmail.com")
  })
  it("Login should respond with a 200 status code and user email",async()=>{
    const response = await api
    .post("/users/auth/login")
    .send(user)
    expect(response.status).toEqual(httpCodes.OK)
    expect(response.body.email).toEqual("emailprueba@gmail.com")
  })
});
describe(" Not authorizated and error fields",()=>{
  it("Not authorizated to delete", async ()=>{
    const response = await api.delete("/users/12345")
    expect(response.status).toEqual(httpCodes.UNAUTHORIZED)
  })
  it("ID doesn´t exists",async ()=>{
    const response = await api.delete("/users/12345")
    expect(response.status).toEqual(httpCodes.BAD_REQUEST)
    expect(response.msg).toEqual('An error occurred. Try again.')
  })
})



afterAll(async () => {
  await db.User.destroy({
    where: {},
    truncate: true
  })
  
});