/*-- IMPORT - CONTROLER FOR SERVICE & UTILS --*/
const ExplorerController = require('./controllers/ExplorerController');
/*-- IMPORT - EXPRESS --*/
const express = require('express');

/*-- SERVER CREATION --*/
const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
    res.json({message: "FizzBuzz API Welcome!"})
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost: ${port}`);
});

app.get('/v1/explorers/:mission', (req, res) => {
    const mission = req.params.mission ;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);

    res.json(explorersInMission);
})

