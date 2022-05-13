const ExplorerService = require('./../../../lib/services/ExplorerService')
const ExplorersJson = require('./../../../explorers.json')

describe("Pruebas de clase ExplorerService", () => {
    test("1. Test de filtrado por misión", () => {
        const explorer = ExplorersJson
        const mission = "node"
        const explorersInNode = ExplorerService.filterByMission(explorer, mission);

        expect(explorersInNode.length).toBe(10)
    })

    test("2. Test para obtener cantidad de exploradores", () => {
        const explorer = ExplorersJson;
        const mission = "node";
        const explorersTotal = ExplorerService.getAmountOfExplorersByMission(explorer, mission);

        expect(explorersTotal.length).toBe(10)
    })

    test("3. Test para obtener explorers por Username", () => {
        const explorer = ExplorersJson;
        const mission = "node";
        const explorersUsernameByMission = ExplorerService.getExplorersUsernamesByMission(explorer, mission);

        expect(explorersUsernameByMission.length).toBe(10)
    })
})
