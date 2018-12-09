const Channelpackage = require( '../Models/channelpackage.model.js' );

// Create and Save a new channelpackage
exports.create = ( req, res ) => {

    // Create a Channelpackage
    const channelpackage = new Channelpackage( {
        packagename: req.body.packagename,
        packagecategory: req.body.packagecategory,
        packagechargingtype: req.body.packagechargingtype,
        packagetransmissiontype: req.body.packagetransmissiontype,
        packagecost: req.body.packagecost,
        packageavailablefromdate: req.body.packageavailablefromdate,
        packageavailabletodate: req.body.packageavailabletodate,
        addedbydefault: req.body.addedbydefault,


        packageID: req.body.packageID,
    } );

    // Save channelpackage in the database
    channelpackage.save()
        .then( data => {
            res.send( data );
        } ).catch( err => {
            res.status( 500 ).send( {
                message: err.message || "Some error occurred while creating the Channelpackage."
            } );
        } );
};

// Retrieve and return all channelpackages from the database.
exports.findAll = ( req, res ) => {
    Channelpackage.find()
        .then( channelpackages => {
            res.send( channelpackages );
        } ).catch( err => {
            res.status( 500 ).send( {
                message: err.message || "Some error occurred while retrieving channelpackages."
            } );
        } );
};

// Find a single channelpackage with a channelpackageId
exports.findOne = ( req, res ) => {
    console.log( 'line 51 ' + req.params.packageID )

    Channelpackage.findOne( {
            packageID: req.params.packageID
        } )
        .then( channelpackage => {
            if ( !channelpackage ) {
                return res.status( 404 ).send( {
                    message: "Channelpackage not found with id" + req.params.packageID
                } );
            }
            res.send( channelpackage );
        } ).catch( err => {
            console.log( err );
            if ( err.kind === 'ObjectId' ) {
                return res.status( 404 ).send( {
                    message: "Channelpackage not found with id " + req.params.packageID
                } );
            }
            return res.status( 500 ).send( {
                message: "Error retrieving channelpackage with id " + req.params.packageID
            } );
        } );
};

// Update a channelpackage identified by the channelpackageId in the request
exports.update = ( req, res ) => {

    // Find channelpackage and update it with the request body
    Channelpackage.findOneAndUpdate( {
            channelpackageID: req.params.packageID
        }, {
            packagename: req.body.packagename,
            packagecategory: req.body.packagecategory,
            packagechargingtype: req.body.packagechargingtype,
            packagetransmissiontype: req.body.packagetransmissiontype,
            packagecost: req.body.packagecost,
            packageavailablefromdate: req.body.packageavailablefromdate,
            packageavailabletodate: req.body.packageavailabletodate,
            addedbydefault: req.body.addedbydefault
        }, {
            new: true
        } )
        .then( channelpackage => {
            if ( !channelpackage ) {
                return res.status( 404 ).send( {
                    message: "Channelpackage not found with id " + req.params.packageID
                } );
            }
            res.send( channelpackage );
        } ).catch( err => {
            if ( err.kind === 'ObjectId' ) {
                return res.status( 404 ).send( {
                    message: "Channelpackage not found with id " + req.params.packageID
                } );
            }
            return res.status( 500 ).send( {
                message: "Error updating channelpackage with id " + req.params.packageID
            } );
        } );
};

// Delete a channelpackage with the specified channelpackageId in the request
exports.delete = ( req, res ) => {
    Channelpackage.findOneAndDelete( {
            channelpackageID: req.params.packageID
        } )
        .then( channelpackage => {
            if ( !channelpackage ) {
                return res.status( 404 ).send( {
                    message: "Channelpackage not found with id " + req.params.packageID
                } );
            }
            res.send( {
                message: "Channelpackage deleted successfully!"
            } );
        } ).catch( err => {
            if ( err.kind === 'ObjectId' || err.name === 'NotFound' ) {
                return res.status( 404 ).send( {
                    message: "Channelpackage not found with id " + req.params.packageID
                } );
            }
            return res.status( 500 ).send( {
                message: "Could not delete channelpackage with id " + req.params.packageID
            } );
        } );
};