module.exports = ( app ) => {
    const retailers = require( '../Controllers/retailer.controller.js' );

    // Create a new retailer
    app.post( '/retailers/registerretailer', retailers.create );

    // Retrieve all retailers
    app.get( '/retailers/viewallretailers', retailers.findAll );

    // Retrieve a single retailer with retailerId
    app.get( '/retailers/getretailerbyid/:retailerId', retailers.findOne );

    // Update a retailer with retailerId
    app.put( '/retailers/updateretailer', retailers.update );

    // Delete a retailer with retailerId
    app.delete( '/retailers/deleteretailer/:retailerId', retailers.delete );
}