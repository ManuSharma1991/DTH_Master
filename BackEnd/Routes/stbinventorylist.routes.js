module.exports = (app) => {
    const stbinventorylists = require('../Controllers/stbinventorylist.controller.js');

    // Create a new stbinventorylist
    app.post('/stbinventorylists/registerstbinventorylist', stbinventorylists.create);

    // Retrieve all stbinventorylists
    app.get('/stbinventorylists/viewallstbinventorylists', stbinventorylists.findAll);

    // Retrieve a single stbinventorylist with stbinventorylistId
    app.get('/stbinventorylists/getstbinventorylistbyid/:stbinventorylistId', stbinventorylists.findOne);

    // Update a stbinventorylist with stbinventorylistId
    app.put('/stbinventorylists/updatestbinventorylist/:stbinventorylistId', stbinventorylists.update);

    // Delete a stbinventorylist with stbinventorylistId
    app.delete('/stbinventorylists/deletestbinventorylist/:stbinventorylistId', stbinventorylists.delete);
}