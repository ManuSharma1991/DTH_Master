const Operator = require('../Models/operator.model.js');

// Create and Save a new operator
exports.create = (req, res) => {

    // Create a Operator
    const operator = new Operator({
        firstname: req.body.firstname,
        lastname: req.body.lastname,

        emailid: req.body.emailid,
        phonenumber: req.body.phonenumber,

        shiftstarttime: req.body.shiftstarttime,
        shiftendtime: req.body.shiftendtime,

        startmeridian: req.body.startmeridian,
        endmeridian: req.body.endmeridian,

        maximumnumberofcustomers: req.body.maximumnumberofcustomers,

        operatorID: req.body.operatorID,
        password: req.body.password || 'Operator@1234'
    });

    // Save operator in the database
    operator.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Operator."
            });
        });
};

// Retrieve and return all operators from the database.
exports.findAll = (req, res) => {
    Operator.find()
        .then(operators => {
            res.send(operators);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving operators."
            });
        });
};

// Find a single operator with a operatorId
exports.findOne = (req, res) => {

};

// Update a operator identified by the operatorId in the request
exports.update = (req, res) => {

};

// Delete a operator with the specified operatorId in the request
exports.delete = (req, res) => {

};