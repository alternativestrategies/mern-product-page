const expect = require('chai').expect;
const request = require('request');


//tests api endpoints
describe('API ENDPOINT TESTS', () => {

    //tests the index page
    it('/', (done) => {
        request('http://localhost:3000/', (err, res, body)=> {
            //false test
            //expect(res.statusCode).to.equal(500);
            expect(res.statusCode).to.equal(200);
            done();
        })
    })

    //tests whether products are returned
    it('/GET products', (done) => {
        request(`http://localhost:3001/api/products`, (err, res, body)=> {
            let data = JSON.parse(body)    
            expect(res.statusCode).to.equal(200);
            expect(res).to.have.property('body');
            expect(data).to.be.a('array');
            done();
        })
    })

    //tests whether contacts are returned when pulsing this code
    it('/GET contacts', (done)=> {
        request(`http://localhost:3001/api/contacts`, (err, res, body)=> {
            let data = JSON.parse(body)    
            expect(res.statusCode).to.equal(200);
            expect(res).to.have.property('body');
            expect(data).to.be.a('array');
            done();
        })
    })

    it('returns the the total price of a product quantity', (done) => {
        request(`http://localhost:3001/api/productfilter?category=tape`, (err, res, body)=> {
           let data = JSON.parse(body);
            expect(res.statusCode).to.equal(200);
            expect(data).to.be.a('array');
            done();
        })
    })

})