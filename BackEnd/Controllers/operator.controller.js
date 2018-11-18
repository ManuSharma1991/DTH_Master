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
    console.log('line 51 ' + req.params.operatorId)

    Operator.findOne({
        operatorID: req.params.operatorId
    }, function (err, operator) {
        if (err) {
            return res.status(200).send(err);
        }
        return res.status(200).send(operator);
    })

    // Operator.findOne({
    //         'operator.operatorID': req.params.operatorId
    //     })
    //     .then(operator => {
    //         if (!operator) {
    //             return res.status(404).send({
    //                 message: "Operator not found with id ==================== " + req.params.operatorId
    //             });
    //         }
    //         res.send(operator);
    //     }).catch(err => {
    //         console.log(err);
    //         if (err.kind === 'ObjectId') {
    //             return res.status(404).send({
    //                 message: "Operator not found with id " + req.params.operatorId
    //             });
    //         }
    //         return res.status(500).send({
    //             message: "Error retrieving operator with id " + req.params.operatorId
    //         });
    //     });
};

// Update a operator identified by the operatorId in the request
exports.update = (req, res) => {

};

// Delete a operator with the specified operatorId in the request
exports.delete = (req, res) => {

};