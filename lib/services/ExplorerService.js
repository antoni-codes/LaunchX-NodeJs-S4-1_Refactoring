class ExplorerService {

    static filterByMission(explorers, mission) {
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        // console.log(explorersInNode);
        return explorersInNode;
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersInNodeAmount = explorers.filter((explorer) => explorer.mission === mission);
        const explorersInNode = explorersInNodeAmount.map((explorer) => explorer.length);
        // console.log(explorersInNode.length);
        return explorersInNode;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission === mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        // console.log(usernamesInNode);
        return usernamesInNode
    }
}

module.exports = ExplorerService