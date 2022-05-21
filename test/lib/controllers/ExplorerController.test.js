const ExplorerService = require('../../../lib/services/ExplorerService')
const FizzbuzzService = require('../../../lib/services/FizzbuzzService')
const Reader = require('../../../lib//utils/Reader')

describe('Testing para Explorer Controllers', () => {
    test('1. Test para probar lectura de JSON', () => {
        const listJson = 'explorers.json'
        const readingJson = Reader.readJsonFile(listJson)

        expect(readingJson.length).toBe(15)
    })
})