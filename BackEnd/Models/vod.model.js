// @ts-nocheck
const mongoose = require( 'mongoose' );

const VODSchema = mongoose.Schema( {
    videoname: String,
    videocategory: String,
    videoduration: String,
    videofrequency: String,
    videostarttime: String,
    videoendtime: String,
    videocost: Number,
    vodID: Number,
    previewlocation: String,
    assetlocation: String
} );

module.exports = mongoose.model( 'VOD', VODSchema );