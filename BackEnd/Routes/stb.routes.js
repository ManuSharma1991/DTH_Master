module.exports = (app) => {
    const stbs = require('../Controllers/stb.controller.js');

    // Create a new stb
    app.post('/stbs/registerstb', stbs.create);

    // Retrieve all stbs
    app.get('/stbs/viewallstbs', stbs.findAll);

    // Retrieve a single stb with stbId
    app.get('/stbs/getstbbyid/:stbId', stbs.findOne);

    // Update a stb with stbId
    app.put('/stbs/updatestb/:stbId', stbs.update);

    // Delete a stb with stbId
    app.delete('/stbs/deletestb/:stbId', stbs.delete);
}