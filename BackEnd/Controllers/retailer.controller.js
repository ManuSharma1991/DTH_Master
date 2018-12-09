const Retailer = require( '../Models/retailer.model.js' );

// Create and Save a new retailer
exports.create = ( req, res ) => {

    // Create a Retailer
    const retailer = new Retailer( {
        name: req.body.name,

        phonenumber1: req.body.phonenumber1,
        phonenumber2: req.body.phonenumber2,

        addressline1: req.body.addressline1,
        addressline2: req.body.addressline2,
        pincode: req.body.pincode,
        city: req.body.city,
        state: req.body.state,

        settopboxlimit: req.body.settopboxlimit,
        creditlimit: req.body.creditlimit,
        commissionpercentageonsaleofgoods: req.body.commissionpercentageonsaleofgoods,
        servicecharges: req.body.servicecharges,

        retailerID: req.body.retailerID,
    } );

    // Save retailer in the database
    retailer.save()
        .then( data => {
            res.send( data );
        } ).catch( err => {
            res.status( 500 ).send( {
                message: err.message || "Some error occurred while creating the Retailer."
            } );
        } );
};

// Retrieve and return all retailers from the database.
exports.findAll = ( req, res ) => {
    Retailer.find()
        .then( retailers => {
            res.send( retailers );
        } ).catch( err => {
            res.status( 500 ).send( {
                message: err.message || "Some error occurred while retrieving retailers."
            } );
        } );
};

// Find a single retailer with a retailerid
exports.findOne = ( req, res ) => {
    console.log( 'line 51 ' + req.params.retailerid )

    Retailer.findOne( {
            retailerID: req.params.retailerid
        } )
        .then( retailer => {
            if ( !retailer ) {
                return res.status( 404 ).send( {
                    message: "Retailer not found with id" + req.params.retailerid
                } );
            }
            res.send( retailer );
        } ).catch( err => {
            console.log( err );
            if ( err.kind === 'ObjectId' ) {
                return res.status( 404 ).send( {
                    message: "Retailer not found with id " + req.params.retailerid
                } );
            }
            return res.status( 500 ).send( {
                message: "Error retrieving retailer with id " + req.params.retailerid
            } );
        } );
};

// Update a retailer identified by the retailerid in the request
exports.update = ( req, res ) => {

    // Find retailer and update it with the request body
    Retailer.findOneAndUpdate( {
            retailerID: req.params.retailerid
        }, {
            name: req.body.name,

            phonenumber1: req.body.phonenumber1,
            phonenumber2: req.body.phonenumber2,

            addressline1: req.body.addressline1,
            addressline2: req.body.addressline2,
            pincode: req.body.pincode,
            city: req.body.city,
            state: req.body.state,

            settopboxlimit: req.body.settopboxlimit,
            creditlimit: req.body.creditlimit,
            commissionpercentageonsaleofgoods: req.body.commissionpercentageonsaleofgoods,
            servicecharges: req.body.servicecharges,
        }, {
            new: true
        } )
        .then( retailer => {
            if ( !retailer ) {
                return res.status( 404 ).send( {
                    message: "Retailer not found with id " + req.params.retailerid
                } );
            }
            res.send( retailer );
        } ).catch( err => {
            if ( err.kind === 'ObjectId' ) {
                return res.status( 404 ).send( {
                    message: "Retailer not found with id " + req.params.retailerid
                } );
            }
            return res.status( 500 ).send( {
                message: "Error updating retailer with id " + req.params.retailerid
            } );
        } );
};

// Delete a retailer with the specified retailerid in the request
exports.delete = ( req, res ) => {
    Retailer.findOneAndDelete( {
            retailerID: req.params.retailerid
        } )
        .then( retailer => {
            if ( !retailer ) {
                return res.status( 404 ).send( {
                    message: "Retailer not found with id " + req.params.retailerid
                } );
            }
            res.send( {
                message: "Retailer deleted successfully!"
            } );
        } ).catch( err => {
            if ( err.kind === 'ObjectId' || err.name === 'NotFound' ) {
                return res.status( 404 ).send( {
                    message: "Retailer not found with id " + req.params.retailerid
                } );
            }
            return res.status( 500 ).send( {
                message: "Could not delete retailer with id " + req.params.retailerid
            } );
        } );
};