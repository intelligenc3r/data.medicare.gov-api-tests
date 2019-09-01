const soda = require('soda-js')

const apiURL = [new soda.Consumer('data.medicare.gov'),
                new soda.Consumer('data.medicare.gov'),
                new soda.Consumer('data.medicare.gov'),
                new soda.Consumer('data.medicare.gov'),
                new soda.Consumer('data.medicare.gov'),
                new soda.Consumer('data.medicare.gov'),
                new soda.Consumer('data.medicare.gov'),
                new soda.Consumer('data.medicare.gov')]
                
const [hospitalAPI, physiciansAPI, nursingAPI, homehealthAPI, dialysisAPI, longtermAPI, rehabAPI, hospiceAPI] = apiURL



hospitalAPI.query()
    .withDataset('rbry-mqwu')
    .limit(50000)
    .getRows()
      .on('success', function(rows) {  
        let hospitalList = rows;
        return hospitalList})
      .on('error', function(error) { console.error(error) })
      

physiciansAPI.query()
    .withDataset('mj5m-pzi6')
    .limit(10000)
    .where({hosp_afl_1:'360098'})
    .where({pri_spec:'INFECTIOUS DISEASE'})
    .getRows()
    .on('success', function(rows) {  
        let physiciansList = rows;
        return physiciansList})
    .on('error', function(error) { console.error(error) })
        
nursingAPI.query()
    .withDataset('b27b-2uc7')
    .limit(50000)
    .getRows()
    .on('success', function(rows) {  
        let nursingList = rows;
        return nursingList})
    .on('error', function(error) { console.error(error) })
        
hospiceAPI.query()
    .withDataset('b27b-2uc7')
    .limit(50000)
    .getRows()
    .on('success', function(rows) {  
        let hospiceList = rows;
        return hospiceList})
    .on('error', function(error) { console.error(error) })

    

module.exports = { hospitalList, physiciansList, nursingList }