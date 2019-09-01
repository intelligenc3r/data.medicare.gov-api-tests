const soda = require('soda-js')
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

    
    
module.exports = { hospitalList, physiciansList, nursingList }
