const ExplorerService = require('./../../../lib/services/ExplorerService')

describe("Pruebas de ExplorerService", () => {
    test("Test de filtrado por misión", () => {
        const explorer = [{ mission: 'node' }]
        const mission = "node"
        const explorersInNode = ExplorerService.filterByMission(explorer, mission);

        expect(explorersInNode.length).toBe(1)
    })
})
