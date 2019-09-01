
const express = require('express')
const soda = require('soda-js')
var pretty = require('express-prettify');
const app = express()
const port = 4000

app.use(pretty({ always: true }));

const apiURL = new soda.Consumer('data.medicare.gov')

let hospitalList
let hospiceList
let physiciansList
let nursingList
let rehabList
let homehealthList
let dialysisList
let longtermList

apiURL.query()
    .withDataset('rbry-mqwu')
    .limit(50000)
    .getRows()
      .on('success', function(rows) {  
        hospitalList = rows;
        return hospitalList})
      .on('error', function(error) { console.error(error) })
      

apiURL.query()
    .withDataset('mj5m-pzi6')
    .limit(10000)
    .where({hosp_afl_1:'360098'})
    .where({pri_spec:'INFECTIOUS DISEASE'})
    .getRows()
    .on('success', function(rows) {  
        physiciansList = rows;
        return physiciansList})
    .on('error', function(error) { console.error(error) })
        
apiURL.query()
    .withDataset('b27b-2uc7')
    .limit(50000)
    .getRows()
    .on('success', function(rows) {  
        nursingList = rows;
        return nursingList})
    .on('error', function(error) { console.error(error) })
        
apiURL.query()
    .withDataset('yc9t-dgbk')
    .limit(50000)
    .getRows()
    .on('success', function(rows) {  
        hospiceList = rows;
        return hospiceList})
    .on('error', function(error) { console.error(error) })

apiURL.query()
    .withDataset('5ngy-qv3v')
    .limit(50000)
    .getRows()
    .on('success', function(rows) {  
        rehabList = rows;
        return rehabList})
    .on('error', function(error) { console.error(error) })

apiURL.query()
    .withDataset('6jpm-sxkc')
    .limit(50000)
    .getRows()
    .on('success', function(rows) {  
        homehealthList = rows;
        return homehealthList})
    .on('error', function(error) { console.error(error) })

apiURL.query()
    .withDataset('eqxu-aw4f')
    .limit(50000)
    .getRows()
    .on('success', function(rows) {  
        dialysisList = rows;
        return dialysisList})
    .on('error', function(error) { console.error(error) })

apiURL.query()
    .withDataset('bgrz-72h4')
    .limit(50000)
    .getRows()
    .on('success', function(rows) {  
        longtermList = rows;
        return longtermList})
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
        total: hospitalList.length,
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

app.get('/hospice', (req,res) => {
    const response = {
        total:hospiceList.length,
        hospice: hospiceList,
        
    }
    if (response.hospice.length > 0) {
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

app.get('/rehab', (req,res) => {
    const response = {
        total:rehabList.length,
        rehab: rehabList,
        
    }
    if (response.rehab.length > 0) {
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

app.get('/longterm', (req,res) => {
    const response = {
        total:longtermList.length,
        longterm: longtermList,
        
    }
    if (response.longterm.length > 0) {
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

app.get('/homehealth', (req,res) => {
    const response = {
        total:homehealthList.length,
        homehealth: homehealthList,
        
    }
    if (response.homehealth.length > 0) {
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
app.get('/dialysis', (req,res) => {
    const response = {
        total:dialysisList.length,
        dialysis: dialysisList,
        
    }
    if (response.dialysis.length > 0) {
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