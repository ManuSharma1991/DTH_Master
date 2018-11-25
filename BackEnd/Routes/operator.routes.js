module.exports = (app) => {
    const operators = require('../Controllers/operator.controller.js');

    // Create a new operator
    app.post('/operators/registeroperator', operators.create);

    // Retrieve all operators
    app.get('/operators/viewalloperators', operators.findAll);

    // Retrieve a single operator with operatorId
    app.get('/operators/getoperatorbyid/:operatorId', operators.findOne);

    // Update a operator with operatorId
    app.put('/operators/updateoperator/:operatorId', operators.update);

    // Delete a operator with operatorId
    app.delete('/operators/deleteoperator/:operatorId', operators.delete);
}