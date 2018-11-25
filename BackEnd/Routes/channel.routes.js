module.exports = (app) => {
    const channels = require('../Controllers/channel.controller.js');

    // Create a new channel
    app.post('/channels/registerchannel', channels.create);

    // Retrieve all channels
    app.get('/channels/viewallchannels', channels.findAll);

    // Retrieve a single channel with channelId
    app.get('/channels/getchannelbyid/:channelId', channels.findOne);

    // Update a channel with channelId
    app.put('/channels/updatechannel/:channelId', channels.update);

    // Delete a channel with channelId
    app.delete('/channels/deletechannel/:channelId', channels.delete);
}