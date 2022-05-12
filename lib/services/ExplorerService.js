

class ExplorerService {
    static filterByMisssion(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        return explorersInNode
    }
}

module.exports = ExplorerService