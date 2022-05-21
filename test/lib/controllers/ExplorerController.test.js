const ExplorerService = require('../../../lib/services/ExplorerService')
const FizzbuzzService = require('../../../lib/services/FizzbuzzService')
const Reader = require('../../../lib//utils/Reader')
const ExplorerController = require('../../../lib/controllers/ExplorerController')

describe('Testing para Explorer Controllers', () => {
    test('1. Test para probar lectura de archivo JSON', () => {
        const listJson = 'explorers.json'
        const readingJson = Reader.readJsonFile(listJson)

        expect(readingJson.length).toBe(15)
    })

    test('2. Test para obtener lista de Explorers por misión', () => {
        const explorerByMission = ExplorerController.getExplorersByMission('node')
        // console.log(explorerByMission);
        expect(explorerByMission.length).toBe(10)
    })

    test('3. Test para obtener usernames por lista filtrada', () => {
        const explorerByUsername = ExplorerController.getExplorersUsernamesByMission('node')
        // console.log(explorerByUsername);
        expect(explorerByUsername.length).toBe(10)
    })
})