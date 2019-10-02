const expect = require('chai').expect;
const request = require('request');


//tests api endpoints
describe('API ENDPOINT TESTS', () => {

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

    //tess whether the total price of a product quantity is returned
    it('returns the the total price of a product quantity', (done) => {
        request(`http://localhost:3001/api/productinvoice/1/2`, (err, res, body)=> {
           let data = JSON.parse(body);
            expect(res.statusCode).to.equal(200);
            expect(data).to.be.a('array');
            (data).forEach(obj => {
                expect(obj).to.have.property('product_name');
            })
            done();
        })
    })

})