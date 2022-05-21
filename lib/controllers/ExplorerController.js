const Reader = require('../utils/Reader')
const ExplorerService = require('../services/ExplorerService')
const FizzbuzzService = require('../services/FizzbuzzService')

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
}

module.exports = ExplorerController


