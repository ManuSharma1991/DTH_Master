module.exports = (app) => {
    const channels = require('../Controllers/channel.controller.js');

    // Create a new channel
    app.post('/channels/registerchannel', channels.create);

    // Retrieve all channels
    app.get('/channels/viewallchannels', channels.findAll);
    app.get('/channels/viewallchannelcategories', channels.findNames);

    // Retrieve a single channel with channelId
    app.get('/channels/getchannelbyid/:channelnumber', channels.findOne);

    // Update a channel with channelId
    app.put('/channels/updatechannel/:channelnumber', channels.update);

    // Delete a channel with channelId
    app.delete('/channels/deletechannel/:channelnumber', channels.delete);
}