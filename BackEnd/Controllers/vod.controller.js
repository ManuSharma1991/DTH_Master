const VOD = require('../Models/vod.model.js');

// Create and Save a new vod
exports.create = (req, res) => {

    // Create a VOD
    const vod = new VOD({
        videoname: req.body.videoname,
        videocategory: req.body.videocategory,
        videoduration: req.body.videoduration,
        videofrequency: req.body.videofrequency,
        videostarttime: req.body.videostarttime,
        videoendtime: req.body.videoendtime,
        videocost: req.body.videocost,

        vodID: req.body.vodID
    });

    // Save vod in the database
    vod.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the VOD."
            });
        });
};

// Retrieve and return all vods from the database.
exports.findAll = (req, res) => {
    VOD.find()
        .then(vods => {
            res.send(vods);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving vods."
            });
        });
};

// Find a single vod with a vodId
exports.findOne = (req, res) => {
    console.log('line 51 ' + req.params.vodId)

    VOD.findOne({
            vodID: req.params.vodId
        })
        .then(vod => {
            if (!vod) {
                return res.status(404).send({
                    message: "VOD not found with id" + req.params.vodId
                });
            }
            res.send(vod);
        }).catch(err => {
            console.log(err);
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "VOD not found with id " + req.params.vodId
                });
            }
            return res.status(500).send({
                message: "Error retrieving vod with id " + req.params.vodId
            });
        });
};

// Update a vod identified by the vodId in the request
exports.update = (req, res) => {

    // Find vod and update it with the request body
    VOD.findOneAndUpdate({
            vodID: req.params.vodId
        }, {
            videoname: req.body.videoname,
            videocategory: req.body.videocategory,
            videoduration: req.body.videoduration,
            videofrequency: req.body.videofrequency,
            videostarttime: req.body.videostarttime,
            videoendtime: req.body.videoendtime,
            videocost: req.body.videocost,
        }, {
            new: true
        })
        .then(vod => {
            if (!vod) {
                return res.status(404).send({
                    message: "VOD not found with id " + req.params.vodId
                });
            }
            res.send(vod);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "VOD not found with id " + req.params.vodId
                });
            }
            return res.status(500).send({
                message: "Error updating vod with id " + req.params.vodId
            });
        });
};

// Delete a vod with the specified vodId in the request
exports.delete = (req, res) => {
    VOD.findOneAndDelete({
            vodID: req.params.vodId
        })
        .then(vod => {
            if (!vod) {
                return res.status(404).send({
                    message: "VOD not found with id " + req.params.vodId
                });
            }
            res.send({
                message: "VOD deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "VOD not found with id " + req.params.vodId
                });
            }
            return res.status(500).send({
                message: "Could not delete vod with id " + req.params.vodId
            });
        });
};