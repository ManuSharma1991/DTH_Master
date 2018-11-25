module.exports = (app) => {
    const retailers = require('../Controllers/retailer.controller.js');

    // Create a new retailer
    app.post('/retailers', retailers.create);

    // Retrieve all retailers
    app.get('/retailers', retailers.findAll);

    // Retrieve a single retailer with retailerId
    app.get('/retailers/:retailerId', retailers.findOne);

    // Update a retailer with retailerId
    app.put('/retailers/:retailerId', retailers.update);

    // Delete a retailer with retailerId
    app.delete('/retailers/:retailerId', retailers.delete);
}