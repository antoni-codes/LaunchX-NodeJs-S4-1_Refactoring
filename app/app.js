// Clase anterior con la que obtenemos los explorers
const Reader = require("./../lib/utils/Reader");
// Clase en Services con la que trabajan los Static Methods
const ExplorerService = require("./../lib/services/ExplorerService")
// Importación de archivo JSON
const explorers = Reader.readJsonFile("explorers.json");
// Const de misión
const mission = "node";

// Aplicación del ExplorerService sobre la lista de explorers
ExplorerService.filterByMission(explorers, mission);

ExplorerService.getAmountOfExplorersByMission(explorers, mission);

ExplorerService.getExplorersUsernamesByMission(explorers, mission);

