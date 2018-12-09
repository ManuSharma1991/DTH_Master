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
} );

module.exports = mongoose.model( 'Channel', ChannelSchema );