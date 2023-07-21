const { allEvents } = require('../../controllers/event.controller');

module.exports = (app) => {
    app.get('/manager/events', allEvents);
    app.get('/manager/event101', (req, res) => {
        res.status(200).send("Successful");
    })
}