const express = require('express')
const app = express()
const port = 4000

app.get('/message', (req,res) => {
    res.send('This is the message')
})

app.get('/hospitals', (req,res) => {
    const response = {
        hospitals: [{
            "id":"100000",
            "name":"Hospital 1",
            "address":"Formatted address",
            "city":"The City",
            "state":"The State",
            "zip":"000000",
            "hasER":"It has an ER",
            "ownership":"Government"
        }],
        total:1
    }
    if (response.hospitals.length > 0) {
        res.send(response)
    } else {
        const errorObject = {
            httpCode: 404,
            message: "NOT FOUND",
            description: "The refferenced asset does not exist.",
            details: "Hospital does not exist"
        }
        res.status(404)
        res.send(errorObject)
    }
    
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

module.exports = app