const mongoose = require('mongoose');

const ChannelSchema = mongoose.Schema({
    channelname: String,
    channelband: String,
    videocarrierfrequency: Number,
    audiocarrierfrequency: Number,
    channelchargetype: String,
    channeltransmissiontype: String,
    channelcharge: Number,

    channelID: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Channel', ChannelSchema);