const chai = require(chai)
const chaiHttp = require(chai-http)
const should = chail.should()
chai.use(chaiHttp)
const server = require('../app')

describe('Hospital', ()=>{
    describe('/GET hospitals', ()=>{
        it('Request should get all hospitals', (done)=>{
            chai.request(server)
            .get('/media')
            .end((err, res) =>{
                (res).should.have.status(200)
                (res.body).should.be.a('object')
                (res.body.hospitals.length).should.be.eql(1)
                done()
            })
        })
    })

    describe('/GET message', ()=>{
        it("Request should get a test message", (done)=>{
            chai.request(server)
            .get('/message')
            .end((err, res) => {
                (res).should.have.status(200)
                (res.body).should.be.a('object')
                done()
            })
        })
    })

})