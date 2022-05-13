const Reader = require('./../../../lib/utils/Reader');

describe('Pruebas de Utils Reader', () => {
    test('1. Test de respuesta método readJsonFile', () => {
        const docJson = "explorers.json";
        const explorers = Reader.readJsonFile(docJson);

        expect(explorers.length).toBe(15);
    })
})
