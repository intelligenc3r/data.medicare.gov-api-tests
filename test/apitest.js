const chai = require(chai)
const chaiHttp = require(chai-http)
const should = chail.should()
chai.use(chaiHttp)
const server = require('../app')

describe('Hospital', ()=>{
    describe('/GET hospitals', ()=>{
        it('Request should get all hospitals', (done)=>{
            chai.request(server)
            .get('/hospitals')
            .end((err, res) =>{
                (res).should.have.status(200)
                (res.body).should.be.a('object')
                (res.body.hospitals).should.include.keys("location")
                done()
            })
        })
    })

    describe('/GET physician', ()=>{
        it("Request should get a subset of physicians", (done)=>{
            chai.request(server)
            .get('/physicians')
            .end((err, res) => {
                (res).should.have.status(200)
                (res.body).should.be.a('object')
                done()
            })
        })
    })

})