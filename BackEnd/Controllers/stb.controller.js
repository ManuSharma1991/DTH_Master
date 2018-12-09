const STB = require( '../Models/stb.model.js' );

// Create and Save a new stb
exports.create = ( req, res ) => {

    // Create a STB
    const stb = new STB( {
        settopboxtype: req.body.settopboxtype,
        settopboxfeatures: req.body.settopboxfeatures,

        length: req.body.length,
        height: req.body.height,
        width: req.body.width,

        price: req.body.price,
        installationcharges: req.body.installationcharges,
        upgradationcharge: req.body.upgradationcharge,
        discount: req.body.discount,
        billingtype: req.body.billingtype,
        refundabledepositamount: req.body.refundabledepositamount,

        stbID: req.body.stbID
    } );

    // Save stb in the database
    stb.save()
        .then( data => {
            res.send( data );
        } ).catch( err => {
            res.status( 500 ).send( {
                message: err.message || "Some error occurred while creating the STB."
            } );
        } );
};

// Retrieve and return all stbs from the database.
exports.findAll = ( req, res ) => {
    STB.find()
        .then( stbs => {
            res.send( stbs );
        } ).catch( err => {
            res.status( 500 ).send( {
                message: err.message || "Some error occurred while retrieving stbs."
            } );
        } );
};

// Find a single stb with a stbId
exports.findOne = ( req, res ) => {
    console.log( 'line 51 ' + req.params.stbId )

    STB.findOne( {
            stbID: req.params.stbId
        } )
        .then( stb => {
            if ( !stb ) {
                return res.status( 404 ).send( {
                    message: "STB not found with id" + req.params.stbId
                } );
            }
            res.send( stb );
        } ).catch( err => {
            console.log( err );
            if ( err.kind === 'ObjectId' ) {
                return res.status( 404 ).send( {
                    message: "STB not found with id " + req.params.stbId
                } );
            }
            return res.status( 500 ).send( {
                message: "Error retrieving stb with id " + req.params.stbId
            } );
        } );
};

// Update a stb identified by the stbId in the request
exports.update = ( req, res ) => {

    // Find stb and update it with the request body
    STB.findOneAndUpdate( {
            stbID: req.params.stbId
        }, {
            settopboxtype: req.body.settopboxtype,
            settopboxfeatures: req.body.settopboxfeatures,

            length: req.body.length,
            height: req.body.height,
            width: req.body.width,

            price: req.body.price,
            installationcharges: req.body.installationcharges,
            upgradationcharge: req.body.upgradationcharge,
            discount: req.body.discount,
            billingtype: req.body.billingtype,
            refundabledepositamount: req.body.refundabledepositamount,
        }, {
            new: true
        } )
        .then( stb => {
            if ( !stb ) {
                return res.status( 404 ).send( {
                    message: "STB not found with id " + req.params.stbId
                } );
            }
            res.send( stb );
        } ).catch( err => {
            if ( err.kind === 'ObjectId' ) {
                return res.status( 404 ).send( {
                    message: "STB not found with id " + req.params.stbId
                } );
            }
            return res.status( 500 ).send( {
                message: "Error updating stb with id " + req.params.stbId
            } );
        } );
};

// Delete a stb with the specified stbId in the request
exports.delete = ( req, res ) => {
    STB.findOneAndDelete( {
            stbID: req.params.stbId
        } )
        .then( stb => {
            if ( !stb ) {
                return res.status( 404 ).send( {
                    message: "STB not found with id " + req.params.stbId
                } );
            }
            res.send( {
                message: "STB deleted successfully!"
            } );
        } ).catch( err => {
            if ( err.kind === 'ObjectId' || err.name === 'NotFound' ) {
                return res.status( 404 ).send( {
                    message: "STB not found with id " + req.params.stbId
                } );
            }
            return res.status( 500 ).send( {
                message: "Could not delete stb with id " + req.params.stbId
            } );
        } );
};