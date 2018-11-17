module.exports = (app) => {
    const operators = require('../Controllers/operator.controller.js');

    // Create a new operator
    app.post('/operators', operators.create);

    // Retrieve all operators
    app.get('/operators', operators.findAll);

    // Retrieve a single operator with operatorId
    app.get('/operators/:operatorId', operators.findOne);

    // Update a operator with operatorId
    app.put('/operators/:operatorId', operators.update);

    // Delete a operator with operatorId
    app.delete('/operators/:operatorId', operators.delete);
}