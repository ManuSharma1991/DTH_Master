const Operator = require( '../Models/operator.model.js' );

// Create and Save a new operator
exports.create = ( req, res ) => {

    // Create a Operator
    const operator = new Operator( {
        firstname: req.body.firstname,
        lastname: req.body.lastname,

        emailid: req.body.emailid,
        phonenumber: req.body.phonenumber,

        shiftstarttime: req.body.shiftstarttime,
        shiftendtime: req.body.shiftendtime,

        startmeridian: req.body.startmeridian,
        endmeridian: req.body.endmeridian,

        maximumnumberofcustomers: req.body.maximumnumberofcustomers,
        totalnumberofactivecustomers: req.body.totalnumberofactivecustomers,

        operatorID: req.body.operatorID
    } );

    // Save operator in the database
    operator.save()
        .then( data => {
            res.send( data );
        } ).catch( err => {
            res.status( 500 ).send( {
                message: err.message || "Some error occurred while creating the Operator."
            } );
        } );
};

// Retrieve and return all operators from the database.
exports.findAll = ( req, res ) => {
    Operator.find()
        .then( operators => {
            res.send( operators );
        } ).catch( err => {
            res.status( 500 ).send( {
                message: err.message || "Some error occurred while retrieving operators."
            } );
        } );
};

// Find a single operator with a operatorid
exports.findOne = ( req, res ) => {
    console.log( 'line 51 ' + req.params.operatorid )

    Operator.findOne( {
            operatorID: req.params.operatorid
        } )
        .then( operator => {
            if ( !operator ) {
                return res.status( 404 ).send( {
                    message: "Operator not found with id" + req.params.operatorid
                } );
            }
            res.send( operator );
        } ).catch( err => {
            console.log( err );
            if ( err.kind === 'ObjectId' ) {
                return res.status( 404 ).send( {
                    message: "Operator not found with id " + req.params.operatorid
                } );
            }
            return res.status( 500 ).send( {
                message: "Error retrieving operator with id " + req.params.operatorid
            } );
        } );
};

// Update a operator identified by the operatorid in the request
exports.update = ( req, res ) => {

    // Find operator and update it with the request body
    Operator.findOneAndUpdate( {
            operatorID: req.body.operatorID
        }, {
            firstname: req.body.firstname,
            lastname: req.body.lastname,

            emailid: req.body.emailid,
            phonenumber: req.body.phonenumber,

            shiftstarttime: req.body.shiftstarttime,
            shiftendtime: req.body.shiftendtime,

            startmeridian: req.body.startmeridian,
            endmeridian: req.body.endmeridian,

            maximumnumberofcustomers: req.body.maximumnumberofcustomers,
            totalnumberofactivecustomers: req.body.totalnumberofactivecustomers
        }, {
            new: true
        } )
        .then( operator => {
            if ( !operator ) {
                return res.status( 404 ).send( {
                    message: "Operator not found with id " + req.body.operatorid
                } );
            }
            res.send( operator );
        } ).catch( err => {
            if ( err.kind === 'ObjectId' ) {
                return res.status( 404 ).send( {
                    message: "Operator not found with id " + req.body.operatorid
                } );
            }
            return res.status( 500 ).send( {
                message: "Error updating operator with id " + req.body.operatorid
            } );
        } );
};

// Delete a operator with the specified operatorid in the request
exports.delete = ( req, res ) => {
    Operator.findOneAndDelete( {
            operatorID: req.params.operatorid
        } )
        .then( operator => {
            if ( !operator ) {
                return res.status( 404 ).send( {
                    message: "Operator not found with id " + req.params.operatorid
                } );
            }
            res.send( {
                message: "Operator deleted successfully!"
            } );
        } ).catch( err => {
            if ( err.kind === 'ObjectId' || err.name === 'NotFound' ) {
                return res.status( 404 ).send( {
                    message: "Operator not found with id " + req.params.operatorid
                } );
            }
            return res.status( 500 ).send( {
                message: "Could not delete operator with id " + req.params.operatorid
            } );
        } );
};