const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')

chai.use(chaiHttp);
const { expect } = chai;

describe('User APIs', () => {
    if('should get all users', (done) => {
        chai
            .request(app)
            .get('/users')
            .end((err, res) => {
                expect(res).to.have.status(200)
                done();
            });
    });
});