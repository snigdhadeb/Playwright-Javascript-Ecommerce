const dataset = require('../utils/E2ETestData.json');
class BasePage{

    constructor(){}

    readTestData(testcase){
        try {
            return dataset[testcase];
          } catch (error) {
            throw new Error(`${errorMessage}`);
          }   
    }
}
module.exports = BasePage;