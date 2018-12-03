// @ts-nocheck
const mongoose = require( 'mongoose' );

const VODSchema = mongoose.Schema( {
    videoname: String,
    videocategory: String,
    videoduration: Number,
    videofrequency: Number,
    videostarttime: Number,
    videoendtime: Number,
    videocost: Number,

    vodID: String,
}, {
    timestamps: true
} );

module.exports = mongoose.model( 'VOD', VODSchema );