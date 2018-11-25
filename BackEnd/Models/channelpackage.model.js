const mongoose = require('mongoose');

const ChannelpackageSchema = mongoose.Schema({
    packagename: String,
    packagecategory: String,
    packagechargingtype: String,
    packagetransmissiontype: String,
    packagecost: Number,
    packageavailablefromdate: String,
    packageavailabletodate: String,
    addedbydefault: String,


    channelpackageID: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Channelpackage', ChannelpackageSchema);