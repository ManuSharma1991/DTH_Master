const STBInventoryList = require('../Models/stbinventorylist.model.js');

// Create and Save a new stbinventorylist
exports.create = (req, res) => {

    // Create a STBInventoryList
    const stbinventorylist = new STBInventoryList({
        settopboxtype: req.body.settopboxtype,
        serialnumber: req.body.serialnumber,
        macid: req.body.macid,
        remotecontrolassetid: req.body.remotecontrolassetid,
        dishassetid: req.body.dishassetid,
        settopboxstatus: req.body.settopboxstatus
    });

    // Save stbinventorylist in the database
    stbinventorylist.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the STBInventoryList."
            });
        });
};

// Retrieve and return all stbinventorylists from the database.
exports.findAll = (req, res) => {
    STBInventoryList.find()
        .then(stbinventorylists => {
            res.send(stbinventorylists);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving stbinventorylists."
            });
        });
};

// Find a single stbinventorylist with a serialnumber
exports.findOne = (req, res) => {
    console.log('line 51 ' + req.params.serialnumber)

    STBInventoryList.findOne({
            serialnumber: req.params.serialnumber
        })
        .then(stbinventorylist => {
            if (!stbinventorylist) {
                return res.status(404).send({
                    message: "STBInventoryList not found with id" + req.params.serialnumber
                });
            }
            res.send(stbinventorylist);
        }).catch(err => {
            console.log(err);
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "STBInventoryList not found with id " + req.params.serialnumber
                });
            }
            return res.status(500).send({
                message: "Error retrieving stbinventorylist with id " + req.params.serialnumber
            });
        });
};

// Update a stbinventorylist identified by the serialnumber in the request
exports.update = (req, res) => {

    // Find stbinventorylist and update it with the request body
    STBInventoryList.findOneAndUpdate({
            serialnumber: req.params.serialnumber
        }, {
            settopboxtype: req.body.settopboxtype,
            macid: req.body.macid,
            remotecontrolassetid: req.body.remotecontrolassetid,
            dishassetid: req.body.dishassetid,
            settopboxstatus: req.body.settopboxstatus
        }, {
            new: true
        })
        .then(stbinventorylist => {
            if (!stbinventorylist) {
                return res.status(404).send({
                    message: "STBInventoryList not found with id " + req.params.serialnumber
                });
            }
            res.send(stbinventorylist);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "STBInventoryList not found with id " + req.params.serialnumber
                });
            }
            return res.status(500).send({
                message: "Error updating stbinventorylist with id " + req.params.serialnumber
            });
        });
};

// Delete a stbinventorylist with the specified serialnumber in the request
exports.delete = (req, res) => {
    STBInventoryList.findOneAndDelete({
            serialnumber: req.params.serialnumber
        })
        .then(stbinventorylist => {
            if (!stbinventorylist) {
                return res.status(404).send({
                    message: "STBInventoryList not found with id " + req.params.serialnumber
                });
            }
            res.send({
                message: "STBInventoryList deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "STBInventoryList not found with id " + req.params.serialnumber
                });
            }
            return res.status(500).send({
                message: "Could not delete stbinventorylist with id " + req.params.serialnumber
            });
        });
};