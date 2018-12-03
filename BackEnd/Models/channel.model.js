// @ts-nocheck
const mongoose = require( 'mongoose' );

const ChannelSchema = mongoose.Schema( {
    channelnumber: Number,
    channelname: String,
    channelband: String,
    videocarrierfrequency: Number,
    audiocarrierfrequency: Number,
    channelchargetype: String,
    channeltransmissiontype: String,
    channelcharge: Number,
    channelcategory: String,
    assetlocation: String,
}, {
    timestamps: true
} );

module.exports = mongoose.model( 'Channel', ChannelSchema );