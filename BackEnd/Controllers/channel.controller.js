const Channel = require( '../Models/channel.model.js' );

// Create and Save a new channel
exports.create = ( req, res ) => {

    // Create a Channel
    const channel = new Channel( {
        channelnumber: req.body.channelnumber,
        channelname: req.body.channelname,
        channelband: req.body.channelband,
        videocarrierfrequency: req.body.videocarrierfrequency,
        audiocarrierfrequency: req.body.audiocarrierfrequency,
        channelchargetype: req.body.channelchargetype,
        channeltransmissiontype: req.body.channeltransmissiontype,
        channelcharge: req.body.channelcharge,
        channelcategory: req.body.channelcategory,
        assetlocation: req.body.assetlocation,
    } );

    // Save channel in the database
    channel.save()
        .then( data => {
            res.send( data );
        } ).catch( err => {
            res.status( 500 ).send( {
                message: err.message || "Some error occurred while creating the Channel."
            } );
        } );
};

// Retrieve and return all channels from the database.
exports.findAll = ( req, res ) => {
    Channel.find()
        .then( channels => {
            res.send( channels );
        } ).catch( err => {
            res.status( 500 ).send( {
                message: err.message || "Some error occurred while retrieving channels."
            } );
        } );
};

exports.findNames = ( req, res ) => {
    Channel.find().distinct( "channelcategory" ).then( channelcategories => {
        res.send( channelcategories );
    } ).catch( err => {
        res.status( 500 ).send( {
            message: err.message || "Some error occurred."
        } )
    } )
}

// Find a single channel with a channelId
exports.findOne = ( req, res ) => {
    console.log( 'line 51 ' + req.params.channelnumber )
    console.log( '56 +' + req.params.channelnumber );
    Channel.findOne( {
            channelnumber: req.params.channelnumber
        } )
        .then( channel => {
            // if ( !channel ) {
            //     return res.status( 404 ).send( {
            //         message: "Channel not found with --------------------- id" + req.params.channelnumber
            //     } );
            // }
            res.send( channel );
        } ).catch( err => {
            console.log( err );
            if ( err.kind === 'ObjectId' ) {
                return res.status( 404 ).send( {
                    message: "Channel not found with id " + req.params.channelnumber
                } );
            }
            return res.status( 500 ).send( {
                message: "Error retrieving channel with id " + req.params.channelnumber
            } );
        } );
};

// Update a channel identified by the channelId in the request
exports.update = ( req, res ) => {

    // Find channel and update it with the request body
    Channel.findOneAndUpdate( {
            channelnumber: req.body.channelnumber
        }, {
            channelname: req.body.channelname,
            channelband: req.body.channelband,
            videocarrierfrequency: req.body.videocarrierfrequency,
            audiocarrierfrequency: req.body.audiocarrierfrequency,
            channelchargetype: req.body.channelchargetype,
            channeltransmissiontype: req.body.channeltransmissiontype,
            channelcharge: req.body.channelcharge,
            channelcategory: req.body.channelcategory,
            assetlocation: req.body.assetlocation,
        }, {
            new: true
        } )
        .then( channel => {
            if ( !channel ) {
                return res.status( 404 ).send( {
                    message: "Channel not found with -------- id " + req.params.channelnumber
                } );
            }
            res.send( channel );
        } ).catch( err => {
            if ( err.kind === 'ObjectId' ) {
                return res.status( 404 ).send( {
                    message: "Channel not found with --++++------ id " + req.params.channelnumber
                } );
            }
            return res.status( 500 ).send( {
                message: "Error updating channel with id " + req.params.channelnumber
            } );
        } );
};

// Delete a channel with the specified channelId in the request
exports.delete = ( req, res ) => {
    Channel.findOneAndDelete( {
            channelnumber: req.params.channelnumber
        } )
        .then( channel => {
            if ( !channel ) {
                return res.status( 404 ).send( {
                    message: "Channel not found with id " + req.params.channelnumber
                } );
            }
            res.send( {
                message: "Channel deleted successfully!"
            } );
        } ).catch( err => {
            if ( err.kind === 'ObjectId' || err.name === 'NotFound' ) {
                return res.status( 404 ).send( {
                    message: "Channel not found with id " + req.params.channelnumber
                } );
            }
            return res.status( 500 ).send( {
                message: "Could not delete channel with id " + req.params.channelnumber
            } );
        } );
};