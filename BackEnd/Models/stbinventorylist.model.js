// @ts-nocheck
const mongoose = require( 'mongoose' );

const STBInventoryListSchema = mongoose.Schema( {
    settopboxtype: String,
    serialnumber: Number,
    macid: String,
    remotecontrolassetid: Number,
    dishassetid: Number,
    settopboxstatus: String

}, {
    timestamps: true
} );

module.exports = mongoose.model( 'STBInventoryList', STBInventoryListSchema );