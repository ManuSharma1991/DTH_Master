// @ts-nocheck
const mongoose = require( 'mongoose' );

const RetailerSchema = mongoose.Schema( {
    name: String,

    phonenumber1: Number,
    phonenumber2: Number,

    addressline1: String,
    addressline2: String,
    pincode: Number,
    city: String,
    state: String,

    settopboxlimit: Number,
    creditlimit: Number,
    commissionpercentageonsaleofgoods: Number,
    servicecharges: Number,
    retailerid: Number
} );

module.exports = mongoose.model( 'Retailer', RetailerSchema );