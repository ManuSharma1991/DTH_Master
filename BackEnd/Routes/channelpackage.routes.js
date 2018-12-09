module.exports = ( app ) => {
    const channelpackages = require( '../Controllers/channelpackage.controller.js' );

    // Create a new channelpackage
    app.post( '/channelpackages/registerchannelpackage', channelpackages.create );

    // Retrieve all channelpackages
    app.get( '/channelpackages/viewallchannelpackages', channelpackages.findAll );

    // Retrieve a single channelpackage with channelpackageId
    app.get( '/channelpackages/getchannelpackagebyid/:channelpackageId', channelpackages.findOne );

    // Update a channelpackage with channelpackageId
    app.put( '/channelpackages/updatechannelpackage', channelpackages.update );

    // Delete a channelpackage with channelpackageId
    app.delete( '/channelpackages/deletechannelpackage/:channelpackageId', channelpackages.delete );
}