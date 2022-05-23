const Reader = require("../../../lib//utils/Reader");
const ExplorerController = require("../../../lib/controllers/ExplorerController");

describe("Testing para Explorer Controllers", () => {
    test("1. Test para probar lectura de archivo JSON", () => {
        const listJson = "explorers.json";
        const readingJson = Reader.readJsonFile(listJson);

        expect(readingJson.length).toBe(15);
    });

    test("2. Test para obtener lista de Explorers por misión", () => {
        const explorerByMission = ExplorerController.getExplorersByMission("node");
        // console.log(explorerByMission);
        expect(explorerByMission.length).toBe(10);
    });

    test("3. Test para obtener usernames por lista filtrada", () => {
        const explorerByUsername = ExplorerController.getExplorersUsernamesByMission("node");
        // console.log(explorerByUsername);
        expect(explorerByUsername.length).toBe(10);
    });

    test("4. Test para obtener cantidad de explorers por la misión filtrada", () => {
        const explorerTotal = ExplorerController.getExplorersAmountByMission("node");
        // console.log(explorerTotal);
        expect(explorerTotal.length).toBe(10);
    });

    test("5. Test para validar Fizzbuzz nuevo requerimento", () => {
        const explorer = {score: 15}
        const fizzbuzzResult = ExplorerController.getExplorerFizzbuzz(explorer)
        expect(fizzbuzzResult.trick).toBe("Fizzbuzz")
    })
});