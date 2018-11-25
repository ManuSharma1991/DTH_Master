module.exports = (app) => {
    const vods = require('../Controllers/vod.controller.js');

    // Create a new vod
    app.post('/vods/registervod', vods.create);

    // Retrieve all vods
    app.get('/vods/viewallvods', vods.findAll);

    // Retrieve a single vod with vodId
    app.get('/vods/getvodbyid/:vodId', vods.findOne);

    // Update a vod with vodId
    app.put('/vods/updatevod/:vodId', vods.update);

    // Delete a vod with vodId
    app.delete('/vods/deletevod/:vodId', vods.delete);
}