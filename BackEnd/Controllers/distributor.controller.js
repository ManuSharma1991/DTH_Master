const Distributor = require( '../Models/distributor.model.js' );

// Create and Save a new distributor
exports.create = ( req, res ) => {

    // Create a Distributor
    const distributor = new Distributor( {
        name: req.body.name,

        phonenumber1: req.body.phonenumber1,
        phonenumber2: req.body.phonenumber2,

        addressline1: req.body.addressline1,
        addressline2: req.body.addressline2,
        pincode: req.body.pincode,
        city: req.body.city,
        zone: req.body.zone,

        settopboxlimit: req.body.settopboxlimit,
        creditlimit: req.body.creditlimit,

        distributorID: req.body.distributorID,
    } );

    // Save distributor in the database
    distributor.save()
        .then( data => {
            res.send( data );
        } ).catch( err => {
            res.status( 500 ).send( {
                message: err.message || "Some error occurred while creating the Distributor."
            } );
        } );
};

// Retrieve and return all distributors from the database.
exports.findAll = ( req, res ) => {
    Distributor.find()
        .then( distributors => {
            res.send( distributors );
        } ).catch( err => {
            res.status( 500 ).send( {
                message: err.message || "Some error occurred while retrieving distributors."
            } );
        } );
};

// Find a single distributor with a distributorid
exports.findOne = ( req, res ) => {
    console.log( 'line 51 ' + req.params.distributorid )

    Distributor.findOne( {
            distributorID: req.params.distributorid
        } )
        .then( distributor => {
            if ( !distributor ) {
                return res.status( 404 ).send( {
                    message: "Distributor not found with id" + req.params.distributorid
                } );
            }
            res.send( distributor );
        } ).catch( err => {
            console.log( err );
            if ( err.kind === 'ObjectId' ) {
                return res.status( 404 ).send( {
                    message: "Distributor not found with id " + req.params.distributorid
                } );
            }
            return res.status( 500 ).send( {
                message: "Error retrieving distributor with id " + req.params.distributorid
            } );
        } );
};

// Update a distributor identified by the distributorid in the request
exports.update = ( req, res ) => {

    // Find distributor and update it with the request body
    Distributor.findOneAndUpdate( {
            distributorID: req.params.distributorid
        }, {
            name: req.body.name,

            phonenumber1: req.body.phonenumber1,
            phonenumber2: req.body.phonenumber2,

            addressline1: req.body.addressline1,
            addressline2: req.body.addressline2,
            pincode: req.body.pincode,
            city: req.body.city,
            zone: req.body.zone,

            settopboxlimit: req.body.settopboxlimit,
            creditlimit: req.body.creditlimit,
        }, {
            new: true
        } )
        .then( distributor => {
            if ( !distributor ) {
                return res.status( 404 ).send( {
                    message: "Distributor not found with id " + req.params.distributorid
                } );
            }
            res.send( distributor );
        } ).catch( err => {
            if ( err.kind === 'ObjectId' ) {
                return res.status( 404 ).send( {
                    message: "Distributor not found with id " + req.params.distributorid
                } );
            }
            return res.status( 500 ).send( {
                message: "Error updating distributor with id " + req.params.distributorid
            } );
        } );
};

// Delete a distributor with the specified distributorid in the request
exports.delete = ( req, res ) => {
    Distributor.findOneAndDelete( {
            distributorID: req.params.distributorid
        } )
        .then( distributor => {
            if ( !distributor ) {
                return res.status( 404 ).send( {
                    message: "Distributor not found with id " + req.params.distributorid
                } );
            }
            res.send( {
                message: "Distributor deleted successfully!"
            } );
        } ).catch( err => {
            if ( err.kind === 'ObjectId' || err.name === 'NotFound' ) {
                return res.status( 404 ).send( {
                    message: "Distributor not found with id " + req.params.distributorid
                } );
            }
            return res.status( 500 ).send( {
                message: "Could not delete distributor with id " + req.params.distributorid
            } );
        } );
};