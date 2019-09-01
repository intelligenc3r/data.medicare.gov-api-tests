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

    describe('/GET nursing', ()=>{
        it("Request should get all nursing homes", (done)=>{
            chai.request(server)
            .get('/nursing')
            .end((err, res) => {
                (res).should.have.status(200)
                (res.body).should.be.a('object')
                (res.body.nursing).should.include.keys("location")
                done()
            })
        })
    })

    describe('/GET hospice', ()=>{
        it("Request should get all hospices", (done)=>{
            chai.request(server)
            .get('/hospice')
            .end((err, res) => {
                (res).should.have.status(200)
                (res.body).should.be.a('object')
                done()
            })
        })
    })

    describe('/GET rehab', ()=>{
        it("Request should get all inpatient rehab clinics", (done)=>{
            chai.request(server)
            .get('/rehab')
            .end((err, res) => {
                (res).should.have.status(200)
                (res.body).should.be.a('object')
                done()
            })
        })
    })

    describe('/GET dialysis', ()=>{
        it("Request should get all dialysis providers", (done)=>{
            chai.request(server)
            .get('/dialysis')
            .end((err, res) => {
                (res).should.have.status(200)
                (res.body).should.be.a('object')
                done()
            })
        })
    })

})