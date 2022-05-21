const Reader = require('../utils/Reader')
const ExplorerService = require('../services/ExplorerService')
// const FizzbuzzService = require('../services/FizzbuzzService')

class ExplorerController {

    static getExplorersByMission(mission) {
        const readJsonFile = Reader.readJsonFile("explorers.json")
        const resultExplorer = ExplorerService.filterByMission(readJsonFile, mission)
        
        return resultExplorer
    }
    
    static getExplorersUsernamesByMission(mission) {
        const readJsonFile = Reader.readJsonFile("explorers.json")
        const resultFilterUser = ExplorerService.getExplorersUsernamesByMission(readJsonFile, mission)
        
        return resultFilterUser
    }

    static getExplorersAmountByMission(mission) {
        const readJsonFile = Reader.readJsonFile("explorers.json")
        const resultByAmount = ExplorerService.getAmountOfExplorersByMission(readJsonFile, mission)
        // console.log(resultByAmount);
        return resultByAmount
    }
}

module.exports = ExplorerController


