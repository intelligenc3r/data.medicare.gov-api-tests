const express = require('express')
const soda = require('soda-js')
var pretty = require('express-prettify');
const app = express()
const port = 4000

app.use(pretty({ always: true }));

const hospitalAPI = new soda.Consumer('data.medicare.gov')
const physiciansAPI = new soda.Consumer('data.medicare.gov')
const nursingAPI = new soda.Consumer('data.medicare.gov')

let hospitalList
let physiciansList 
let nursingList 

hospitalAPI.query()
    .withDataset('rbry-mqwu')
    .limit(50000)
    .getRows()
      .on('success', function(rows) {  
        hospitalList = rows;
        return hospitalList})
      .on('error', function(error) { console.error(error) })
      

physiciansAPI.query()
    .withDataset('mj5m-pzi6')
    .limit(10000)
    .where({hosp_afl_1:'360098'})
    .where({pri_spec:'INFECTIOUS DISEASE'})
    .getRows()
    .on('success', function(rows) {  
        physiciansList = rows;
        return physiciansList})
    .on('error', function(error) { console.error(error) })
        
nursingAPI.query()
    .withDataset('b27b-2uc7')
    .limit(50000)
    .getRows()
    .on('success', function(rows) {  
        nursingList = rows;
        return nursingList})
    .on('error', function(error) { console.error(error) })
        
  

app.get('/physicians', (req,res) => {
    const response = {
        total:physiciansList.length,
        physicians: physiciansList,
        
    }
    if (response.physicians.length > 0) {
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

app.get('/hospitals', (req,res) => {
   
    const response = {
        total:hospitalList.length,
        hospitals: hospitalList,
        
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

app.get('/nursing', (req,res) => {
    const response = {
        total:nursingList.length,
        nursing: nursingList,
        
    }
    if (response.nursing.length > 0) {
        res.send(response)
    } else {
        const errorObject = {
            httpCode: 404,
            message: "NOT FOUND",
            description: "The refferenced asset does not exist.",
            details: "Nursing home does not exist"
        }
        res.status(404)
        res.send(errorObject)
    }
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

module.exports = app