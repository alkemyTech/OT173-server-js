const app = require('../app');
const request = require('supertest');
const httpCodes = require('../constants/constants');

describe('GET /members', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/members').send();
        expect(response.status).toBe(httpCodes.OK)
    });

    test('should respond an array', async () => {
        const response = await request(app).get('/members').send();
        expect(response.body).toBeInstanceOf(Array);
    });
});


describe('POST /members', () => {

    describe('contains name and image', () => {
        const newMember = {
            name: "Facundo Villarreal",
            image: "www.abcdefghig.com"
        };

        test('should respond with a status code 200', async () => {
            const response = await request(app).post('/members').send(newMember);
            expect(response.status).toBe(httpCodes.OK);
        });

        test('should respond have a content-type: application/json in header', async () => {
            const response = await request(app).post('/members').send(newMember);
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
        });

        test('shoul respond ok: true', async () => {
            const response = await request(app).post('/members').send(newMember);
            expect(response.body.ok).toBe(true);
        });

    });

    describe('no contains name and image', () => {

        test('should respond whit a status code 400', async () => {
            const response = await request(app).post('/members').send({});
            expect(response.status).toBe(httpCodes.BAD_REQUEST);
        });

        test('should respond whit a status code 400', async () => {
            const response = await request(app).post('/members').send({
                name: "",
                image:""
            })
            expect(response.status).toBe(httpCodes.BAD_REQUEST)
        });
    });
});

describe('PUT /members', () => {
    const updateMember = {
        name: "User name 1",
        image: "www.abcdefghig.com"
    };
    const id = 1;

    describe('contains name, image and ID ', () => {
        test('should respond whit a status code 200', async () => {
            const response = await request(app).put(`/members/${id}`).send(updateMember);
            expect(response.status).toBe(httpCodes.OK)
        });
    });

    describe('contains name image and NOT ID ', () => {
        test('should respond with a status code 400', async () => {
            const response = await request(app).put(`/members/`).send(updateMember)
            expect(response.status).toBe(httpCodes.NOT_FOUND)
        });
    });

    describe('contains name image and ID FAKE', () => {
        const idFake = Math.random()
        test('should respond with a status code 400', async () => {
            const response = await request(app).put(`/members/${idFake}`).send(updateMember)
            expect(response.status).toBe(httpCodes.BAD_REQUEST)
        });
    });

    describe('contains prop name and image empty', () => {

        test('should respond status code 400', async() => { 
            const response = await request(app).put(`/members/${id}`).send({
                name: "",
                image: ""
            });
            expect(response.status).toBe(httpCodes.BAD_REQUEST);
         });
    });
});

describe('DELETE /members', () => {
    const nameFake = {
        name: 'alkslakslakslaklskaldklak'
    };

    describe('does not contain existing name', () => {
        test('should respond with a status code 404', async () => {
            const response = await request(app).delete('/members').send(nameFake);
            expect(response.status).toBe(httpCodes.NOT_FOUND);
        });
    });

    describe('contains prop name empty', () => {
        test('should respond with a status code 400', async () => {
            const response = await request(app).delete('/members').send({
                name: ""
            });
            expect(response.status).toBe(httpCodes.BAD_REQUEST);
        });
    });

    describe('no existi is name', () => {
        test('should respond with a status code 404', async () => {
            const response = await request(app).delete('/members').send({
                name: Math.random().toString()
            });
            expect(response.status).toBe(httpCodes.NOT_FOUND);
        });
    });

    describe('delete true', () => {
        test('should respond with a status code 200', async () => {
            const response = await request(app).delete('/members').send({
                name: "User name 1"
            });
            expect(response.status).toBe(httpCodes.OK);
        });
    });

})